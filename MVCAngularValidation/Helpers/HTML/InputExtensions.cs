using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using CompareAttribute = System.ComponentModel.DataAnnotations.CompareAttribute;

namespace MVCAngularValidation.Helpers.HTML
{
    public static class InputExtensions
    {
        public static IHtmlString AngularInputFor<T, TValue>(this HtmlHelper<T> helper,
                                            Expression<System.Func<T, TValue>> prop,
                                            object htmlAttributes = null)
        {
            var angularInput = new TagBuilder("input");
            var errorsDiv = new TagBuilder("div");

            errorsDiv.Attributes.Add(new KeyValuePair<string, string>("class","errors-container"));

            SetValidationAttributes(prop, angularInput);
            SetHtmlAttributs(htmlAttributes, angularInput);

            return new HtmlString(angularInput.ToString(TagRenderMode.SelfClosing) + errorsDiv.ToString(TagRenderMode.Normal));
        }

        private static void SetHtmlAttributs(object htmlAttributes, TagBuilder angularInput)
        {
            var customAttributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);

            foreach (var attr in customAttributes)
            {
                angularInput.Attributes.Add(new KeyValuePair<string, string>(attr.Key, attr.Value.ToString()));
            }
        }

        private static string GetAngularAttributeName(object attribute)
        {
            var name = attribute.GetType().Name;
            name = name.Replace("Attribute","");

            StringBuilder validationAttributeBuilder = new System.Text.StringBuilder();
            validationAttributeBuilder.Append("validation");

            foreach (var c in name)
            {
                if (char.IsUpper(c))
                    validationAttributeBuilder.Append('-');
                validationAttributeBuilder.Append(c);
            }
            return validationAttributeBuilder.ToString();
        }

        private static void SetValidationAttributes<T, TValue>(Expression<Func<T, TValue>> prop, TagBuilder angularInput)
        {

            MemberExpression memberExpression = prop.Body as MemberExpression;

            Stopwatch stopwatch = Stopwatch.StartNew();


            if (memberExpression != null)
            {
                var validationAttributes = memberExpression.Member
                    .GetCustomAttributes(true)
                    .ToList();

                foreach (var attribute in validationAttributes)
                {
                    if (attribute is ValidationAttribute)
                    {
                        var validationAttribute = GetAngularAttributeName(attribute);

                        SetValidationErrorMessage(angularInput, validationAttribute, attribute);

                        if (attribute is MinLengthAttribute)
                        {
                            angularInput.Attributes.Add(new KeyValuePair<string, string>(validationAttribute+"-min",
                                (attribute as MinLengthAttribute).Length.ToString()));
                        }
                        else if (attribute is RegularExpressionAttribute)
                        {
                            angularInput.Attributes.Add(new KeyValuePair<string, string>(validationAttribute+"-pattern",
                                (attribute as RegularExpressionAttribute).Pattern));
                        }
                        else if (attribute is CompareAttribute)
                        {
                            angularInput.Attributes.Add(new KeyValuePair<string, string>(validationAttribute+"-target",
                                (attribute as CompareAttribute).OtherProperty));
                        }
                        else if (attribute is StringLengthAttribute)
                        {
                            var x = attribute as StringLengthAttribute;
                            if(x.MinimumLength != 0)
                                angularInput.Attributes.Add(new KeyValuePair<string, string>(validationAttribute + "-min", x.MinimumLength.ToString()));
                            angularInput.Attributes.Add(new KeyValuePair<string, string>(validationAttribute + "-max", x.MaximumLength.ToString()));
                        }

                    }

                }
                angularInput.Attributes.Add(new KeyValuePair<string, string>("id", memberExpression.Member.Name));
                angularInput.Attributes.Add(new KeyValuePair<string, string>("ng-model", memberExpression.Member.Name));

                stopwatch.Stop();
                Debug.WriteLine(stopwatch.ElapsedTicks);
            }
        }

        private static void SetValidationErrorMessage(TagBuilder angularInput, string validationAttribute,
            object attribute)
        {
            angularInput.Attributes.Add(new KeyValuePair<string, string>(validationAttribute,
                (attribute as ValidationAttribute).ErrorMessage));
        }
    }
}
