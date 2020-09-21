A quick hack to convert a standard Google Doc editing url to the slightly more pleasant `open?id=` for sharing or adding to Google Forms.

In other words, convert the urls from
> https://docs.google.com/document/d/0a1b2c3d4e5f6g7h8i/edit

to
> https://docs.google.com/open?id=0a1b2c3d4e5f6g7h8i

<br>

Why? I helped maintain an intranet / LMS at my org and we use a lot of Google Docs and Forms. We preferred to share the `open?id=` urls as they are shorter and look a bit better in Google Form description fields. This bookmarklet is also faster than clicking the "Share" button and copying the link. YMMV.

<br>

I currently use this as a bookmarklet. [Here is the minified version of the `toOpenIdUrls` function](https://gist.githubusercontent.com/unforswearing/d7f4def8e87bbace37774ecf932e816b/raw/aa72f31648dffae3d4f9b7f02c8be779e4aa2f45/toOpenIdUrl_min.js).

This script was [originally posted as a gist](https://gist.github.com/unforswearing/d7f4def8e87bbace37774ecf932e816b)
