angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/foundation/checkbox.html","<div class=\"large-12 columns\" ng-class=\"{\'error\': hasError(), \'valid\': hasSuccess(), \'feedback\': form.feedback !== false }\"><label class=\"checkbox\" ng-class=\"{\'error\': hasError()}\" ng-show=\"showTitle()\"><input type=\"checkbox\" sf-changed=\"form\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\"> <span ng-bind-html=\"form.title\"></span> <span class=\"label-text-help\" ng-if=\"!!form.description && !(hasError() && errorMessage(schemaError()))\">{{form.description}}</span> <span class=\"label-text-error\" ng-if=\"(hasError() && errorMessage(schemaError()))\" ng-class=\"evalInScope(form.feedback) || {\'valid\': hasSuccess(), \'error\': hasError() }\" ng-bind-html=\"(hasError() && errorMessage(schemaError()))\"></span></label></div>");
$templateCache.put("directives/decorators/foundation/checkboxes.html","<div sf-array=\"form\" ng-model=\"$$value$$\" class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><label><input type=\"checkbox\" sf-changed=\"form\" ng-model=\"titleMapValues[$index]\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("directives/decorators/foundation/datepicker.html","<div class=\"large-12 columns\" ng-class=\"{\'error\': hasError(), \'valid\': hasSuccess(), \'feedback\': form.feedback !== false }\"><label ng-class=\"{\'error\': hasError()}\" ng-show=\"showTitle()\"><span ng-if=\"!!(form.placeholder||form.title)\" ng-show=\"$$value$$\" class=\"show-hide label-text-title\">{{form.placeholder||form.title}}</span> <input ng-show=\"form.key\" type=\"text\" schema-validate=\"form\" ng-model=\"$$value$$\" pick-a-date=\"date\" pick-a-date-options=\"{ selectYears: true, selectMonths: true }\" placeholder=\"{{form.placeholder||form.title}}\"> <span class=\"label-text-help\" ng-if=\"!!form.description && !(hasError() && errorMessage(schemaError()))\">{{form.description}}</span> <span class=\"label-text-error\" ng-if=\"(hasError() && errorMessage(schemaError()))\" ng-class=\"evalInScope(form.feedback) || {\'valid\': hasSuccess(), \'error\': hasError() }\" ng-bind-html=\"(hasError() && errorMessage(schemaError()))\"></span></label></div>");
$templateCache.put("directives/decorators/foundation/default.html","<div class=\"large-12 columns\" ng-class=\"{\'error\': hasError(), \'valid\': hasSuccess(), \'feedback\': form.feedback !== false }\"><label ng-class=\"{\'error\': hasError()}\" ng-show=\"showTitle()\"><span ng-if=\"!!(form.placeholder||form.title)\" class=\"show-hide label-text-title\">{{form.placeholder||form.title}}</span> <input ng-show=\"form.key\" type=\"{{form.format||form.type}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder||form.title}}\" ng-class=\"{\'error\': hasError()}\" ng-model-options=\"form.ngModelOptions\" ng-model=\"$$value$$\" schema-validate=\"form\"> <span class=\"label-text-help\" ng-if=\"!!form.description && !(hasError() && errorMessage(schemaError()))\">{{form.description}}</span> <span class=\"label-text-error\" ng-if=\"(hasError() && errorMessage(schemaError()))\" ng-class=\"evalInScope(form.feedback) || {\'valid\': hasSuccess(), \'error\': hasError() }\" ng-bind-html=\"(hasError() && errorMessage(schemaError()))\"></span></label></div>");
$templateCache.put("directives/decorators/foundation/fieldset-trcl.html","<fieldset ng-disabled=\"form.readonly\"><legend ng-show=\"form.title\">{{ form.title }}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><div ng-transclude=\"\"></div></fieldset>");
$templateCache.put("directives/decorators/foundation/radio-buttons.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><div><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"btn-group\"><label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-primary\' : form.style.unselected || \'btn-primary\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" sf-changed=\"form\" style=\"display: none;\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" ng-value=\"item.value\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></div>");
$templateCache.put("directives/decorators/foundation/radios-inline.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" sf-changed=\"form\" ng-model=\"$$value$$\" ng-value=\"item.value\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("directives/decorators/foundation/radios.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"radio\" ng-repeat=\"item in form.titleMap\"><label><input type=\"radio\" sf-changed=\"form\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" ng-value=\"item.value\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("directives/decorators/foundation/readonly.html","<div class=\"form-group\"><label ng-show=\"showTitle()\">{{form.title}}</label> <input ng-if=\"form.type !== \'textarea\'\" type=\"text\" disabled=\"\" class=\"form-control\" value=\"{{$$value$$}}\"> <textarea ng-if=\"form.type === \'textarea\'\" disabled=\"\" class=\"form-control\">{{$$value$$}}</textarea><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></div>");
$templateCache.put("directives/decorators/foundation/section.html","<div ng-if=\"!form.condition || evalExpr(form.condition,{ model: model, \'arrayIndex\': arrayIndex })\"><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></div>");
$templateCache.put("directives/decorators/foundation/select.html","<div class=\"large-12 columns\" ng-class=\"{\'error\': hasError(), \'valid\': hasSuccess(), \'feedback\': form.feedback !== false }\"><label ng-class=\"{\'error\': hasError()}\" ng-show=\"showTitle()\"><span ng-if=\"!!(form.placeholder||form.title)\" ng-show=\"$$value$$\" class=\"show-hide label-text-title\">{{form.placeholder||form.title}}</span><select ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" sf-changed=\"form\" placeholder=\"{{form.placeholder||form.title}}\" class=\"form-control\" schema-validate=\"form\" ng-options=\"item.value as item.name for item in form.titleMap\"><option style=\"display:none\" value=\"\">{{form.placeholder||form.title}}</option></select><span class=\"label-text-help\" ng-if=\"!!form.description && !(hasError() && errorMessage(schemaError()))\">{{form.description}}</span> <span class=\"label-text-error\" ng-if=\"(hasError() && errorMessage(schemaError()))\" ng-class=\"evalInScope(form.feedback) || {\'valid\': hasSuccess(), \'error\': hasError() }\" ng-bind-html=\"(hasError() && errorMessage(schemaError()))\"></span></label></div>");
$templateCache.put("directives/decorators/foundation/submit.html","<div class=\"large-12 columns\"><input type=\"submit\" class=\"button button-block\" value=\"{{form.title}}\" ng-if=\"form.type === \'submit\'\"></div>");
$templateCache.put("directives/decorators/foundation/tabarray.html","<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\" style=\"margin-bottom: 15px\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{evalExpr(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabsType || form.tabsType === \'left\' || form.tabsType === \'right\'}\"><div class=\"tab-content\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator form=\"copyWithIndex($index)\"></sf-decorator><button ng-click=\"selected.tab = deleteFromArray($index).length - 1\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\" style=\"margin-bottom: 15px\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{evalExpr(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-click=\"$event.preventDefault() || appendToArray()\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div>");
$templateCache.put("directives/decorators/foundation/textarea.html","<div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label ng-show=\"showTitle()\">{{form.title}}</label> <textarea class=\"form-control\" sf-changed=\"form\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\"></textarea><span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span></div>");}]);
angular.module("hull-quiz").run(["$templateCache", function($templateCache) {$templateCache.put("introduction_step.html","<h1 class=\"step-name\">{{translate(\"Let\'s play!\")}}</h1><p class=\"step-description\">{{translate(\'Answer the questions correctly!\')}}</p><button ng-if=\"state.user\" ng-click=\"play()\" class=\"button\">{{translate(\'Play\')}}</button><div ng-if=\"!state.user\"><div ng-if=\"state.isLogingIn\">{{translate(\'Waiting for log in to complete...\')}}</div><div ng-if=\"!state.isLogingIn\" ng-repeat=\"service in authenticationServices\"><button ng-click=\"play(service)\" class=\"button\">{{translate(\'Play with {service}\', { service: service })}}</button></div></div>");
$templateCache.put("play_step.html","<countdown ng-if=\"state.countdown\" max=\"state.settings.quiz_countdown\" value=\"state.countdown\"></countdown><h1 class=\"step-name\">{{state.currentQuestion.name}}</h1><p ng-if=\"state.currentQuestion.description\" class=\"step-description\">{{state.currentQuestion.description}}</p><countdown ng-if=\"state.currentQuestion.countdown\" max=\"state.settings.question_countdown\" value=\"state.currentQuestion.countdown\"></countdown><img ng-if=\"state.currentQuestion.picture\" ng-src=\"state.currentQuestion.picture\"><div ng-repeat=\"answer in state.currentQuestion.answers\" class=\"answers\"><a ng-click=\"selectAnswer(state.currentQuestion, answer)\" class=\"answer\"><h2 class=\"answer-name\">{{answer.name}}</h2><p ng-if=\"answer.description\" class=\"answer-description\">{{answer.description}}</p></a></div>");
$templateCache.put("result_step.html","<h1 class=\"step-name\">{{translate(\'Result\')}}</h1><div class=\"step-description\"><p>{{translate(\'Score {score} after {attempts, plural, one{one attempt} other{# attemps} }.\', { score: state.badge.score, attempts: state.badge.stats.attempts })}}</p><p><a ng-click=\"reset()\" href=\"#\">{{translate(\'Replay\')}}</a> {{translate(\'or complete your profile.\')}}</p></div><form name=\"shipForm\" sf-schema=\"state.form.fields_schema\" sf-form=\"form\" sf-model=\"formData\" ng-submit=\"submitForm(shipForm)\"></form>");
$templateCache.put("style.html","<style>\n  body {\n    color: {{state.settings.text_color}};\n    color: {{state.settings.text_color | opacity:0.6}};\n    background-color: {{state.settings.background_color}};\n  }\n\n  a {\n    color: {{state.settings.text_color}};\n    color: {{state.settings.text_color | opacity:0.6}};\n  }\n\n  .step-name,\n  .answer-name,\n  .loader-message,\n  a:hover,\n  a:active {\n    color: {{state.settings.text_color}};\n  }\n\n  .ship {\n    background: linear-gradient(to bottom, {{state.settings.background_color | opacity:0}} 60%, {{state.settings.background_color}} 100%);\n  }\n\n  .ship::after {\n    content: \"\";\n    background: url({{state.settings.background_image}});\n    background-position: top center;\n    background-size: cover;\n    opacity: {{state.settings.background_image_opacity}};\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    z-index: -1;\n    -webkit-filter: blur({{state.settings.background_image_blur}}px);\n    -moz-filter: blur({{state.settings.background_image_blur}}px);\n    -o-filter: blur({{state.settings.background_image_blur}}px);\n    -ms-filter: blur({{state.settings.background_image_blur}}px);\n    filter: blur({{state.settings.background_image_blur}}px);\n  }\n\n  .answer {\n    background-color: {{state.settings.text_color | opacity:0.05}};\n    border: 1px solid {{state.settings.text_color | opacity:0.1}};\n  }\n\n  .answer:hover,\n  .answer:focus {\n    background-color: {{state.settings.text_color | opacity:0.1 }};\n    border-color {{state.settings.text_color | opacity:0.2}};\n    box-shadow: 0 0 10px {{state.settings.text_color | opacity:0.2}};\n  }\n\n  .progress .meter {\n    background-color: {{state.settings.button_background_color}}\n  }\n\n  .button {\n    color: {{state.settings.button_text_color}};\n    background-color: {{state.settings.button_background_color}}\n  }\n\n  .button:hover,\n  .button:focus {\n    background-color: {{state.settings.button_background_color | opacity:0.9}}\n  }\n\n  .footer {\n    border-top: 1px solid {{state.settings.text_color | opacity:0.1 }};\n  }\n\n  .loader {\n    background-color: {{state.settings.background_color | opacity: 0.6}};\n  }\n</style>");
$templateCache.put("thanks_step.html","<h1 class=\"step-name\">{{translate(\'Thanks for playing!\')}}</h1><p class=\"step-description\">{{translate(\'Come back later to see the result!\')}}</p>");
$templateCache.put("directives/countdown.html","<div class=\"progress round\"><span class=\"meter\" style=\"width: {{getWidth()}}%;\"></span></div>");}]);