(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{458:function(e,t,s){"use strict";s.r(t);var r=s(43),o=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h4",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),s("p",[e._v("I've recently covered a variety of Docker topics including:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip54.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create and Publish a .NET Core WebAPI project"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip55.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add it to a Docker Container using Docker Compose and push it to a Docker Cloud"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip56.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use it in Azure with Web App for Containers"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip57.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Registry vs. Docker Repository"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip58.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Continuous Deployment with Docker and Web App for Containers"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("One topic that keep coming up is how do you use Visual Studio 2017 with Docker support. If you go back and read "),s("router-link",{attrs:{to:"./tip55/"}},[e._v("this post")]),e._v(", then  you'll see that I did everything manually on my mac, but Visual Studio 2017 makes this much easier. Let's take a look.")],1),e._v(" "),s("h4",{attrs:{id:"use-visual-studio-2017-with-docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-visual-studio-2017-with-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Visual Studio 2017 with Docker Compose")]),e._v(" "),s("p",[e._v("Before we begin, make sure you have "),s("a",{attrs:{href:"https://store.docker.com/editions/community/docker-ce-desktop-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker for Windows"),s("OutboundLink")],1),e._v(" installed.")]),e._v(" "),s("p",[e._v("Open Visual Studio 2017 and create a .NET Core WebAPI project.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc1.png")}}),e._v(" "),s("p",[e._v("When I select "),s("strong",[e._v("Web API")]),e._v(", you can click a checkbox to enable docker support. I went ahead and toggled the OS to Linux for those that wish to follow on with my existing guide using Visual Studio 2017.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc2.png")}}),e._v(" "),s("p",[e._v("Look at the Solution Explorer")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc3.png")}}),e._v(" "),s("p",[e._v("Do you remember the "),s("router-link",{attrs:{to:"./tip55/"}},[e._v("three steps")]),e._v(" that I used to add an ASP.NET WebAPI project to a Docker Container using Docker Cloud? If not, here they are:")],1),e._v(" "),s("p",[e._v("1.) We need a Dockerfile for the entire to understand the image we are creating.\n2.) We need a docker-compose.yml file to pass to the Docker Compose Command\n3.) We need to run the Docker Compose command.")]),e._v(" "),s("p",[e._v("If you look back at the solution explorer, then you'll see there are two projects in the solution:")]),e._v(" "),s("p",[s("strong",[e._v("A docker-compose project")])]),e._v(" "),s("p",[e._v("This project is going to run docker-compose to create our image and is the default startup project. It also contains the "),s("strong",[e._v("docker-compose.yml")]),e._v(" file that we created in Step 2.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc4.png")}}),e._v(" "),s("p",[s("strong",[e._v("Keep it Simple")]),e._v(" This project takes care of steps 2 and 3 that we performed manually before.")]),e._v(" "),s("p",[s("strong",[e._v("A ASP.NET WebAPI project")])]),e._v(" "),s("p",[e._v("The Dockerfile is already created and waiting for us in the ASP.NET WebAPI project.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc5.png")}}),e._v(" "),s("p",[e._v("Sweet, so what do I have to do...")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc6.png")}}),e._v(" "),s("p",[e._v("Press "),s("strong",[e._v("this")]),e._v(" button. Yeah, that easy. If you look in your "),s("strong",[e._v("Visual Studio Output")]),e._v(" and select "),s("strong",[e._v("Docker")]),e._v(", then you'll see the commands running (that we performed manually in step 3)")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc7.png")}}),e._v(" "),s("p",[e._v("For those that want to examine the output see below:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('docker-compose -f "C:\\Users\\micrum\\Documents\\Visual Studio 2017\\Projects\\mbcvswebapi\\docker-compose.yml" -f "C:\\Users\\micrum\\Documents\\Visual Studio 2017\\Projects\\mbcvswebapi\\docker-compose.override.yml" -f "C:\\Users\\micrum\\Documents\\Visual Studio 2017\\Projects\\mbcvswebapi\\obj\\Docker\\docker-compose.vs.debug.g.yml" -p dockercompose2735583743043077288 config\nservices:\n  mbcvswebapi:\n    build:\n      args:\n        source: obj/Docker/empty/\n      context: C:\\Users\\micrum\\Documents\\Visual Studio 2017\\Projects\\mbcvswebapi\\mbcvswebapi\n      dockerfile: Dockerfile\n    entrypoint: tail -f /dev/null\n    environment:\n      ASPNETCORE_ENVIRONMENT: Development\n      DOTNET_USE_POLLING_FILE_WATCHER: \'1\'\n      NUGET_FALLBACK_PACKAGES: /root/.nuget/fallbackpackages\n    image: mbcvswebapi:dev\n    labels:\n      com.microsoft.visualstudio.debuggee.arguments: \' --additionalProbingPath /root/.nuget/fallbackpackages  bin/Debug/netcoreapp1.1/mbcvswebapi.dll\'\n      com.microsoft.visualstudio.debuggee.killprogram: /bin/bash -c "if PID=$$(pidof\n        -x dotnet); then kill $$PID; fi"\n      com.microsoft.visualstudio.debuggee.program: dotnet\n      com.microsoft.visualstudio.debuggee.workingdirectory: /app\n    ports:\n    - 80/tcp\n    volumes:\n    - C:\\Users\\micrum\\Documents\\Visual Studio 2017\\Projects\\mbcvswebapi\\mbcvswebapi:/app:rw\n    - C:\\Users\\micrum\\vsdbg:/remote_debugger:ro\n    - C:\\Users\\micrum\\.nuget\\packages:/root/.nuget/fallbackpackages:ro\n    - C:\\Users\\micrum\\.nuget\\packages:/root/.nuget/packages:ro\nversion: \'3.0\'\ndocker  ps --filter "status=running" --filter "name=dockercompose2735583743043077288_mbcvswebapi_" --format {{.ID}} -n 1\n682958fa63f8\ndocker  inspect --format="{{json .NetworkSettings.Ports}}" 682958fa63f8\n{"80/tcp":[{"HostIp":"0.0.0.0","HostPort":"32768"}]}\nWaiting for response from http://localhost:32768/api/values ...\nLaunching http://localhost:32768/api/values ...\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br")])]),s("p",[e._v("At this point, it has spun up a localhost and started our site.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azurevsdoc8.png")}}),e._v(" "),s("h4",{attrs:{id:"we-can-now-push-the-image-to-docker-cloud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#we-can-now-push-the-image-to-docker-cloud","aria-hidden":"true"}},[e._v("#")]),e._v(" We can now push the image to Docker Cloud")]),e._v(" "),s("p",[e._v("Head back to the command prompt and enter:")]),e._v(" "),s("p",[s("code",[e._v("docker login")]),e._v(" to authenticate your account.")]),e._v(" "),s("p",[s("code",[e._v("docker push mbcrump/mbcwebapi:latest")]),e._v(" or whatever you called it in your "),s("code",[e._v("docker-compose.yml")]),e._v(" to push your image to Docker Cloud. Please ensure you have a Docker repo already setup.")]),e._v(" "),s("p",[e._v("You can go back to Docker Cloud to verify it pushed successfully.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/dockerblog2.png")}})])},[],!1,null,null,null);t.default=o.exports}}]);