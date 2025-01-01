import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, b as renderComponent, d as createAstro, u as unescapeHTML, F as Fragment, a as renderSlot, f as renderScript, g as renderHead } from './astro/server_BITgS1cK.mjs';
/* empty css                         */

const icons = {"local":{"prefix":"local","lastModified":1735696208,"icons":{"arrowRight":{"body":"<path fill=\"currentColor\" d=\"M4 12h12.25L11 6.75l.66-.75 6.5 6.5-6.5 6.5-.66-.75L16.25 13H4z\"/>"},"chevronRight":{"body":"<path fill=\"currentColor\" d=\"m8.59 18.16 5.66-5.66-5.66-5.66-.7.71 4.95 4.95-4.95 4.95z\"/>"},"course":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" color=\"currentColor\"><path d=\"M6.514 2c-1.304.129-2.182.419-2.838 1.076-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177 1.067-1.07 1.166-2.717 1.175-5.846\"/><path d=\"m10.526 7 1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5 1.389-.034 2.195-.198 2.883-.796.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758.08.06.104.172.048.255-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17\"/></g>"},"cup":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m11 8 1.5-1.5v4\"/><path d=\"m19 5 .949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5\"/><path stroke-linecap=\"round\" d=\"M12 16v3\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z\"/><path stroke-linecap=\"round\" d=\"M18 22H6M17 2.456c.741.141 1.181.297 1.56.765.477.586.452 1.219.401 2.485-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068\"/></g>"},"dialog":{"body":"<g fill=\"none\"><path fill=\"currentColor\" d=\"m10.87 21.51.645.382zm.259-.438-.646-.382zm-2.258 0 .646-.382zm.26.438-.646.382zM1.25 12.8a.75.75 0 0 0 1.5 0zm1.747 4.044a.75.75 0 0 0-1.385.574zm3.292 2.741.024-.75zm-1.82-.29-.287.693zm13.226-2.164.693.287zm-3.984 2.454-.024-.75zm1.82-.29.287.693zM3.91 6.59l-.392-.639zM2.59 7.91l-.64-.392zm5.326 11.912-.381.646zm6.932-12.908a.75.75 0 1 0 .304-1.47zm3.707 1.934a.75.75 0 1 0-1.469.304zm-7.04 13.044.26-.438-1.292-.764-.26.438zm-3.29-.438.26.438 1.291-.764-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zM6.313 18.835c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM8.8 5.25c-1.295 0-2.319 0-3.137.077-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.2 2.2 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756.11-.153.174-.203.22-.23l-.763-1.291a2.2 2.2 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083.216-.026.501-.036.947-.05zM11.2 6.75c1.798 0 2.873.004 3.648.164l.304-1.47c-.963-.198-2.227-.194-3.952-.194zm7.55 6.05c0-1.725.004-2.989-.195-3.952l-1.469.304c.16.775.164 1.85.164 3.648z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M7.033 6c.052-.992.183-1.661.52-2.21A3.75 3.75 0 0 1 8.79 2.554C9.692 2 10.92 2 13.375 2h2.25c1.528 0 2.58 0 3.375.133m-1 12.602c.748-.025 1.253-.091 1.685-.27a3.75 3.75 0 0 0 2.03-2.03c.285-.689.285-1.563.285-3.31v-.75c0-1.528 0-2.58-.133-3.375\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6.51 13h.008M10 13h.009m3.482 0h.009\"/></g>"},"facebook":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path stroke-dasharray=\"24\" stroke-dashoffset=\"24\" d=\"M17 4h-2c-2.5 0-4 1.5-4 4v12\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"24;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M8 12h7\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.5s\" dur=\"0.2s\" values=\"8;0\"/></path></g>"},"hamburger":{"body":"<path fill=\"currentColor\" d=\"M32 96v64h448V96zm0 128v64h448v-64zm0 128v64h448v-64z\"/>","width":512,"height":512},"heart":{"body":"<path fill=\"currentColor\" d=\"M7 4.83c0 1.547 1.726 3.178 3.15 4.26.799.606 1.198.91 1.85.91s1.051-.304 1.85-.91C15.274 8.007 17 6.376 17 4.83c0-2.79-2.75-3.833-5-1.677C9.75.997 7 2.039 7 4.829\"/><path fill=\"currentColor\" d=\"M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134 1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308\" opacity=\".5\"/>"},"help":{"body":"<path fill=\"currentColor\" d=\"M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2 0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2\"/>"},"instagram":{"body":"<circle cx=\"17\" cy=\"7\" r=\"1.5\" fill=\"none\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.3s\" dur=\"0.15s\" values=\"0;1\"/></circle><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"72\" stroke-dashoffset=\"72\" d=\"M16 3c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5h4Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"72;0\"/></path><path stroke-dasharray=\"28\" stroke-dashoffset=\"28\" d=\"M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.6s\" values=\"28;0\"/></path></g>"},"logo":{"body":"<path fill=\"#1da2d3\" d=\"M96.127 171.936V0H9.204z\"/><path fill=\"#1163b5\" d=\"M96.133 172.19 95.92 0h87.473z\"/><path fill=\"#de0c84\" d=\"m0 0 87.3 172.665H0z\"/><path fill=\"#a1d109\" d=\"M192.341 0 105.04 172.665h87.301z\"/><path fill=\"#3266cb\" d=\"M229.246 117.34h15.865V29.748h.331l13.221 87.592h15.205l13.221-87.592h.331v87.592h17.188V1.653h-25.947l-11.569 82.799h-.33L255.193 1.653h-25.947zm115.191 1.653c17.849 0 27.6-10.578 27.6-29.087V29.087c0-18.51-9.751-29.087-27.6-29.087s-27.599 10.577-27.599 29.087v60.819c0 18.509 9.75 29.087 27.599 29.087m0-16.527c-5.784 0-9.42-3.14-9.42-11.404V27.93c0-8.263 3.636-11.403 9.42-11.403 5.785 0 9.42 3.14 9.42 11.403v63.132c0 8.264-3.635 11.404-9.42 11.404m63.463 16.527c17.849 0 27.434-10.578 27.434-29.418 0-14.378-4.792-23.633-19.997-37.02-11.899-10.412-15.7-16.527-15.7-24.955 0-7.933 3.305-11.073 9.089-11.073s9.09 3.14 9.09 11.403v5.95h17.188v-4.793c0-18.51-8.759-29.087-26.443-29.087s-27.104 10.577-27.104 28.757c0 13.221 4.958 22.641 20.163 36.028 11.899 10.412 15.535 16.527 15.535 26.112 0 8.594-3.636 11.569-9.42 11.569-5.785 0-9.421-2.975-9.421-11.238v-7.933h-17.187v6.611c0 18.509 8.924 29.087 26.773 29.087m32.558-1.653h16.857l3.305-22.642h20.659v-.33l3.305 22.972h18.179L483.923 1.653h-24.625zm22.311-38.342 7.933-57.183h.33l8.098 57.183zm48.754-77.345h18.179V117.34h-18.179zm31.731 115.687h18.179V80.485l7.272-14.709 15.37 51.564h19.006L581.1 44.126l21.65-42.473h-18.179l-23.138 48.754V1.653h-18.179z\"/><path fill=\"#ca1478\" d=\"M230.071 172.134h8.905c5.831 0 8.693-3.233 8.693-9.17V144.2c0-5.937-2.862-9.171-8.693-9.171h-8.905zm5.83-5.3V140.33h2.969c1.855 0 2.968.954 2.968 3.605v19.294c0 2.651-1.113 3.605-2.968 3.605zm15.69-31.805h5.831v37.105h-5.831zm8.641 37.105h5.406l1.061-7.262h6.626v-.106l1.06 7.368h5.83l-6.042-37.105h-7.898zm7.156-12.297 2.544-18.341h.106l2.597 18.341zm15.637 12.297h15.425v-5.3h-9.594v-31.805h-5.831zm26.451.531c5.724 0 8.852-3.393 8.852-9.33v-19.506c0-5.937-3.128-9.33-8.852-9.33s-8.853 3.393-8.853 9.33v19.506c0 5.937 3.128 9.33 8.853 9.33m0-5.301c-1.856 0-3.022-1.007-3.022-3.658v-20.248c0-2.651 1.166-3.658 3.022-3.658s3.021 1.007 3.021 3.658v20.248c0 2.651-1.166 3.658-3.021 3.658m21.043 5.301c5.725 0 8.694-3.393 8.694-9.33v-12.138h-8.429v5.3h2.916v7.262c0 2.651-1.166 3.605-3.022 3.605s-3.021-.954-3.021-3.605v-20.301c0-2.651 1.166-3.658 3.021-3.658 1.856 0 3.022 1.007 3.022 3.658v3.551h5.513v-3.18c0-5.937-2.969-9.33-8.694-9.33-5.724 0-8.693 3.393-8.693 9.33v19.506c0 5.937 2.969 9.33 8.693 9.33m29.42 0c5.724 0 8.693-3.393 8.693-9.33v-28.306h-5.619v28.73c0 2.651-1.113 3.605-2.968 3.605-1.856 0-2.969-.954-2.969-3.605v-28.73h-5.831v28.306c0 5.937 2.969 9.33 8.694 9.33m12.827-.531h5.195v-27.086h.106l6.997 27.086h5.99v-37.105h-5.195v22.21h-.106l-5.672-22.21h-7.315zm22.634 0h8.906c5.831 0 8.693-3.233 8.693-9.17V144.2c0-5.937-2.862-9.171-8.693-9.171H395.4zm5.831-5.3V140.33h2.969c1.855 0 2.968.954 2.968 3.605v19.294c0 2.651-1.113 3.605-2.968 3.605zm24.172 5.3h5.83v-11.82l2.333-4.718 4.929 16.538h6.096l-7.05-23.482 6.944-13.623h-5.831l-7.421 15.638v-15.638h-5.83zm30.373.531c5.725 0 8.693-3.393 8.693-9.33v-28.306h-5.619v28.73c0 2.651-1.113 3.605-2.968 3.605s-2.969-.954-2.969-3.605v-28.73h-5.83v28.306c0 5.937 2.968 9.33 8.693 9.33m12.828-.531h15.425v-5.3h-9.595v-31.805h-5.83zm18.658 0h5.831V140.33h6.096v-5.301h-18.023v5.301h6.096zm23.217.531c5.725 0 8.694-3.393 8.694-9.33v-28.306h-5.619v28.73c0 2.651-1.113 3.605-2.969 3.605s-2.968-.954-2.968-3.605v-28.73h-5.831v28.306c0 5.937 2.969 9.33 8.693 9.33m12.828-.531h5.831v-15.902h2.014c2.651 0 3.658 1.113 3.658 4.559v6.785c0 3.021.212 3.604.53 4.558h5.937c-.583-1.378-.636-2.703-.636-4.505v-6.52c0-4.188-.954-6.944-3.87-7.845v-.106c2.597-1.06 3.817-3.499 3.817-7.315v-2.279c0-5.725-2.598-8.535-8.641-8.535h-8.64zm5.831-21.202V140.33h2.65c2.068 0 2.969 1.166 2.969 3.817v2.862c0 2.968-1.325 3.923-3.499 3.923zm47.54 20.297q-5.124 1.553-8.774 1.553-6.212 0-10.133-4.129t-3.921-10.702q0-6.393 3.455-10.483 3.456-4.089 8.839-4.089 5.1 0 7.881 3.624 2.783 3.623 2.783 10.301l-.026 1.579h-17.73q1.113 10.016 9.81 10.016 3.183 0 7.816-1.708zm-17.393-16.177h12.398q0-7.842-5.849-7.842-5.875 0-6.549 7.842m23.397 11.464h5.619v5.619h-5.619zm11.238 5.618h7.739l5.619-37.105h-5.354l-3.817 28.783h-.106l-3.816-28.783h-5.884zm13.358-5.618h5.619v5.619h-5.619z\"/>","width":613,"height":173},"twitter":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"M11.025.656h2.147L8.482 6.03 14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.6s\" values=\"28;0\"/></path></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h14v14H0z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.6s\" values=\"28;0\"/></path></clipPath></defs></g>","width":14,"height":14},"youtube":{"body":"<g fill=\"none\"><path d=\"m12.593 23.258-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M12 4c.855 0 1.732.022 2.582.058l1.004.048.961.057.9.061.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064.9-.061.962-.057 1.004-.048A62 62 0 0 1 12 4m0 2c-.825 0-1.674.022-2.5.056l-.978.047-.939.055-.882.06-.808.063a1.8 1.8 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062.882.06.939.056.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047.939-.055.882-.06.808-.063a1.8 1.8 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062-.882-.06-.939-.056-.978-.047A61 61 0 0 0 12 6m-2 3.575a.6.6 0 0 1 .819-.559l.081.04 4.2 2.424a.6.6 0 0 1 .085.98l-.085.06-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z\"/></g>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$5 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/astro-icon@1.1.5/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$4 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="font-heading text-base uppercase font-[500] hover:duration-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/header/link.astro", void 0);

const $$Astro$3 = createAstro();
const $$BtnBlack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BtnBlack;
  const { url, icon = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex gap-2 justify-center items-center font-heading uppercase text-[#006ab3] border-2 border-[#006ab3] py-2 px-4 bg-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-75 hover:bg-[#006ab3] hover:duration-700 hover:text-white"> ${icon ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight", "class": "w-7 h-7 font-bold fill-inherit" })}` : null} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/btn_black.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full" data-astro-cid-2dvdsfoq> <div class="md:w-10/12 w-11/12 m-auto py-8 flex justify-between items-center" data-astro-cid-2dvdsfoq> <div data-astro-cid-2dvdsfoq> <a href="/" data-astro-cid-2dvdsfoq><img src="/mosaikevlogo.png" alt="Logo" class="w-auto md:h-14 h-10" data-astro-cid-2dvdsfoq></a> </div> <!-- Mobile Navigation --> <div class="absolute right-0 top-7 z-1 h-auto" data-astro-cid-2dvdsfoq> <!-- Menü Butonu --> <button id="menu-button" class="hamburger lg:hidden block" data-astro-cid-2dvdsfoq> <div class="line" data-astro-cid-2dvdsfoq></div> <div class="line" data-astro-cid-2dvdsfoq></div> <div class="line" data-astro-cid-2dvdsfoq></div> </button> </div> <!-- Menü İçeriği --> <div id="menu" class="absolute top-28 left-0 z-20 bg-gray-100 transform transition-transform duration-200 hidden -translate-y-4 h-screen w-screen" data-astro-cid-2dvdsfoq> <nav class="flex flex-col gap-4 p-6" data-astro-cid-2dvdsfoq> ${renderComponent($$result, "Link", $$Link, { "url": "/", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "Link", $$Link, { "url": "/uber-uns", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Über Uns` })} ${renderComponent($$result, "Link", $$Link, { "url": "/projekt", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Projekt` })} ${renderComponent($$result, "Link", $$Link, { "url": "#", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Aktivität` })} ${renderComponent($$result, "Link", $$Link, { "url": "#", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Flüchtlingshilfe` })} ${renderComponent($$result, "Link", $$Link, { "url": "#", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Kontakt` })} ${renderComponent($$result, "BtnBlack", $$BtnBlack, { "url": "/spenden", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Spenden` })} <div class="flex gap-4 mt-6" data-astro-cid-2dvdsfoq> ${renderComponent($$result, "BtnBlack", $$BtnBlack, { "icon": false, "url": "https://www.facebook.com/mosaikruesselsheim", "target": "_blank", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook", "class": "w-8 h-8 font-bold fill-white hover:duration-700", "data-astro-cid-2dvdsfoq": true })} ` })} ${renderComponent($$result, "BtnBlack", $$BtnBlack, { "icon": false, "url": "https://www.instagram.com/mosaikruesselsheim", "target": "_blank", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "instagram", "class": "w-8 h-8 font-bold fill-white hover:duration-700", "data-astro-cid-2dvdsfoq": true })} ` })} ${renderComponent($$result, "BtnBlack", $$BtnBlack, { "icon": false, "url": "https://www.youtube.com/channel/UCODuRWxvi22iFNEwEEpVaLg", "target": "_blank", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "youtube", "class": "w-8 h-8 font-bold hover:duration-700", "data-astro-cid-2dvdsfoq": true })} ` })} ${renderComponent($$result, "BtnBlack", $$BtnBlack, { "icon": false, "url": "https://x.com/MosaikDialog", "target": "_blank", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "twitter", "class": "w-8 h-8 font-bold fill-white hover:duration-700", "data-astro-cid-2dvdsfoq": true })} ` })} </div> </nav> </div> <!-- Navigation --> <div class="lg:flex hidden gap-6 items-center" data-astro-cid-2dvdsfoq> <ul class="flex gap-4" data-astro-cid-2dvdsfoq> <li data-astro-cid-2dvdsfoq>${renderComponent($$result, "Link", $$Link, { "url": "/", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Home` })}</li> <li data-astro-cid-2dvdsfoq>${renderComponent($$result, "Link", $$Link, { "url": "/uber-uns", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Über Uns` })}</li> <li data-astro-cid-2dvdsfoq>${renderComponent($$result, "Link", $$Link, { "url": "/projekt", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Projekt` })}</li> <li data-astro-cid-2dvdsfoq>${renderComponent($$result, "Link", $$Link, { "url": "#", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Aktivität` })}</li> <li data-astro-cid-2dvdsfoq>${renderComponent($$result, "Link", $$Link, { "url": "#", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Flüchtlingshilfe` })}</li> <li data-astro-cid-2dvdsfoq>${renderComponent($$result, "Link", $$Link, { "url": "#", "data-astro-cid-2dvdsfoq": true }, { "default": ($$result2) => renderTemplate`Kontakt` })}</li> </ul> <a href="/spenden" class="bg-[#006ab3] text-white hover:text-[#006ab3] hover:bg-white border-4 border-[#006ab3] rounded-xl uppercase font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-75 hover:duration-700" data-astro-cid-2dvdsfoq>Spenden</a> </div> </div> </header> ${renderScript($$result, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/header/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/header/index.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-4 text-gray-50"> <h3 class="text-3xl font-semibold mb-3">${title}</h3> <div class="w-14 bg-white h-1.5 mb-6"></div> <div> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/footer/card.astro", void 0);

const $$Astro$1 = createAstro();
const $$FLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FLink;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="group flex gap-2 justify-left items-center space-x-2 text-gray-50"> <span class="transform group-hover:duration-700 transition-transform group-hover:translate-x-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevronRight", "class": "w-7 h-7 font-bold fill-inherit hover:duration-700 hover:pl-2" })} </span> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/footer/f_link.astro", void 0);

const $$BottomFooter = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="md:flex flex-wrap md:justify-between w-11/12 md:w-10/12 mx-auto my-16 border-t py-6 border-white text-gray-100"> <div class="flex gap-2 md:justify-normal justify-center items-center md:pb-0 pb-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heart", "class": "w-7 h-7 font-bold fill-pink-600" })} <span>Mosaik e.V. ${year} Rüsselsheim</span> </div> <div class="text-center md:text-left">
Alle Rechte vorbehalten. Entworfen und entwickelt von <a href="https://akgngr.com" class="text-blue-300 hover:text-pink-600 font-semibold">akgngr</a>.
</div> </div>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/footer/bottom_footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#004a7d] pb-6 pt-10 text-fluid"> <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-11/12 md:w-10/12 mx-auto"> ${renderComponent($$result, "Card", $$Card, { "title": "\xDCber Uns" }, { "default": ($$result2) => renderTemplate` <img src="mosaikevlogo.png" alt="Logo" class="w-1/2 mb-4"> <p>
Der Verein Mosaik Dialog und Kultur e.V. in Rüsselsheim fördert Bildung,
        Jugendarbeit und interkulturellen Dialog durch Sprachkurse, Nachhilfe
        und kulturelle Aktivitäten.
</p> <div class="mt-6"> <h3 class="text-3xl font-semibold mb-3">Bürozeiten</h3> <div class="w-14 bg-white h-1.5 mb-6"></div> <p>Mon. – Frei. 10:00–17:00 Uhr</p> </div> ` })} ${renderComponent($$result, "Card", $$Card, { "title": "Offiziell" }, { "default": ($$result2) => renderTemplate` <ul> <li> ${renderComponent($$result2, "Flink", $$FLink, { "url": "#" }, { "default": ($$result3) => renderTemplate`Über Uns` })} </li> <li> ${renderComponent($$result2, "Flink", $$FLink, { "url": "#" }, { "default": ($$result3) => renderTemplate`Datenschutzerklärung` })} </li> <li> ${renderComponent($$result2, "Flink", $$FLink, { "url": "#" }, { "default": ($$result3) => renderTemplate`Impressum` })} </li> <li> ${renderComponent($$result2, "Flink", $$FLink, { "url": "#" }, { "default": ($$result3) => renderTemplate`Kontakt` })} </li> </ul> ` })} ${renderComponent($$result, "Card", $$Card, { "title": "Kontakt" }, { "default": ($$result2) => renderTemplate` <ul class="space-y-2"> <li><strong>Telefon:</strong> 0179-7051273</li> <li><strong>E-Mail:</strong> kontakt@mosaik-ruesselsheim.de</li> <li><strong>Adress:</strong> BahnhofStr. 20, 60547 Rüsselsheim</li> </ul> <div class="flex justify-between gap-4 mt-10"> <a class="transition duration-700 ease-in-out hover:scale-125 text-gray-50" href="https://www.facebook.com/mosaikruesselsheim" target="_blank"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook", "class": "w-10 h-10 font-bold fill-white hover:duration-700" })} </a> <a class="transition duration-700 ease-in-out hover:scale-125 text-gray-50" href="https://www.instagram.com/mosaikruesselsheim" target="_blank"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "instagram", "class": "w-10 h-10 font-bold fill-white hover:duration-700" })} </a> <a class="transition duration-700 ease-in-out hover:scale-125" href="https://www.youtube.com/channel/UCODuRWxvi22iFNEwEEpVaLg" target="_blank"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "youtube", "class": "w-10 h-10 text-white font-bold hover:duration-700" })} </a> <a class="transition duration-700 ease-in-out hover:scale-125 text-gray-50" href="https://x.com/MosaikDialog" target="_blank"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "twitter", "class": "w-10 h-10 font-bold fill-white hover:duration-700" })} </a> </div> ` })} </div> ${renderComponent($$result, "BottomFooter", $$BottomFooter, {})} </footer>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/footer/index.astro", void 0);

const $$GlobalStyles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/GlobalStyles.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="de"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="./style.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">${renderComponent($$result, "GlobalStyles", $$GlobalStyles, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Index$1, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Index, {})} </body></html>`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, $$Icon as a, $$BtnBlack as b };
