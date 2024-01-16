# adobe-connect-reference

Documentation for the Adobe Connect app

## Introduction

The Adobe Connect app uses CEF (Chromium Embedded Framework), meaning that the actual app is HTML, CSS, and JS, meaning that it is possible to extend and customize the app. This document will explain how to do that.

I'm doing this on macOS, where apps are just folders with a `.app` extension. Everything will work the same on Linux or Windows (the only difference is that you'll have to unpack and repack the app yourself).

Happy hacking!

## Getting Started

If you're on macOS, you can cd into `Adobe Connect.app`, or you can right click on the app in Finder and select "Show Package Contents". If not, you'll have to unpack it yourself. In the app resource folder (`Contents/Resources/` on macOS), you'll find a file `index.html`, along with a bunch of static assets and JavaScript files.

## Documentation

You can view the documentation [here](https://doc.deno.land/https/raw.githubusercontent.com/shreyasm-dev/adobe-connect-reference/main/api.ts).
