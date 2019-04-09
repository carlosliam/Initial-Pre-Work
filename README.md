# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

First, the web browser asks the DNS server for the IP address for the URL https://www.techtonic.com/. Then the web browser makes an HTTP request to that IP address, asking for the root page (/). There is a web server running at that IP address that will respond to that request with HTML data. That HTML data may include other resource URLs, such as images, stylesheets and scripts, to be requested by the browser for use by the page. Those resources are all loaded in the same way as the original HTML page, with a DNS query and HTTP requests to a web server.

## From start to finish, how does data reach you to be rendered in the browser?

See the answer to the previous question.

## What code is rendered in the browser?

The HTML received from the server is rendered with styling provided by CSS. JavaScript can also modify how the page looks and behaves.

## What is the server-side code’s main function?

The server-side code's main function is to find the data being asked for by a client and give it to the client.

## What is the client-side code’s main function?

The client-side code's main function is to get the data from the server and display it.

## What is runtime?

Runtime is the time during which a particular piece of code is running.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of each asset is created and cached.

## How many instances of the server-side code are available at any given time?

I don't really understand what is meant by "instances" here. I know that there are web servers that are multithreaded, which allow multiple requests to be processed at once.

## How many instances of the databases connected to the server application are created?

Only one instance of the database is created, and the server connects to the database instance.
