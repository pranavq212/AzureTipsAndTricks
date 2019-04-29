(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{418:function(t,e,o){"use strict";o.r(e);var i=o(43),r=Object(i.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=TLGLBbv3HoA&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=19?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Test Web Applications in Production"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h4",{attrs:{id:"intro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),o("p",[t._v("We've recently created a "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("web app"),o("OutboundLink")],1),t._v(" and uploaded it to Azure App Service. We also took a look at "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiple ways"),o("OutboundLink")],1),t._v(" to examine those files through the Azure portal interface and how we'd add "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),o("OutboundLink")],1),t._v(" for our web app. In this post, we'll look at a feature called "),o("code",[t._v("Testing in Production")]),t._v(" which isn't as scary as it sounds.")]),t._v(" "),o("h4",{attrs:{id:"testing-web-apps-in-production-with-azure-app-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing-web-apps-in-production-with-azure-app-service","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing Web Apps in Production with Azure App Service")]),t._v(" "),o("p",[o("strong",[t._v("Hold up!")]),t._v(" You'll want to take a look at the "),o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),o("OutboundLink")],1),t._v(" post if you haven't worked with deployment slots before.")]),t._v(" "),o("p",[t._v("Go to the Azure Portal and select my App Service and click on "),o("strong",[t._v("Testing in Production")]),t._v(" under "),o("strong",[t._v("Development Tools")]),t._v(" to get started. The first thing you'll see is "),o("code",[t._v("Static Routing")]),t._v(" and you'll notice that it's looking for a deployment slot and traffic percentage.")]),t._v(" "),o("p",[o("strong",[t._v("What is Static Routing")]),t._v(" This section lets you control how traffic is distributed between your production and other slots. This is useful if you want to try out a new change with a small percentage of requests and then gradually increase the percentage of requests that get the new behavior.")]),t._v(" "),o("p",[t._v("We'll want to split the traffic to our site into 2 groups to test our new site and see if customers like it. Since this is just a demo, I want to send a large number of folks to our new "),o("code",[t._v("staging")]),t._v(" site as shown below.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/testinprodazure7.png")}}),t._v(" "),o("p",[t._v("Great! Now keep in mine that we have two versions of our site. One that is "),o("code",[t._v("production")]),t._v(" and "),o("code",[t._v("staging")]),t._v(". They are identical except for the staging site has a large font that says "),o("code",[t._v("jsQuizEngine version 2")]),t._v(".")]),t._v(" "),o("p",[t._v("We don't want to "),o("strong",[t._v("swap")]),t._v(" sites, we just want to "),o("strong",[t._v("distribute")]),t._v(" traffic between the two site.")]),t._v(" "),o("p",[t._v("I can test this by going to my production url and refreshing the site until the "),o("code",[t._v("staging")]),t._v(" site is shown with the production url.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/testinprodazure1.gif")}}),t._v(" "),o("p",[t._v("Success! it works, but what happens when they leave the site? We actually store a cookie that keeps track of it. You can find this cookie yourself by expecting the site and looking for the cookie shown below.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/testinprodazure2.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);