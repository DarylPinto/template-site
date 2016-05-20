"use strict";var $UA=new Object;$UA.browser=function(){var i,e=navigator.userAgent,r=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(r[1])?(i=/\brv[ :]+(\d+)/g.exec(e)||[],"IE "+(i[1]||"")):"Chrome"===r[1]&&(i=e.match(/\b(OPR|Edge)\/(\d+)/),null!=i)?i.slice(1).join(" ").replace("OPR","Opera"):(r=r[2]?[r[1],r[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(i=e.match(/version\/(\d+)/i))&&r.splice(1,1,i[1]),r.join(" "))}(),-1!=navigator.appVersion.indexOf("Win")&&($UA.OS="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&($UA.OS="MacOS"),-1!=navigator.appVersion.indexOf("X11")&&($UA.OS="UNIX"),-1!=navigator.appVersion.indexOf("Linux")&&($UA.OS="Linux"),$UA.isChrome=$UA.browser.indexOf("Chrome")>-1,$UA.isFirefox=$UA.browser.indexOf("Firefox")>-1,$UA.isOpera=$UA.browser.indexOf("Opera")>-1,$UA.isSafari=$UA.browser.indexOf("Safari")>-1,$UA.isIE=$UA.browser.indexOf("IE")>-1,$UA.isEdge=$UA.browser.indexOf("Edge")>-1,$UA.isWindows="Windows"===$UA.OS,$UA.isMac="MacOS"===$UA.OS,$UA.isUNIX="UNIX"===$UA.OS,$UA.isLinux="Linux"===$UA.OS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXItZGV0ZWN0aW9uLmpzIl0sIm5hbWVzIjpbIiRVQSIsIk9iamVjdCIsImJyb3dzZXIiLCJ0ZW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNIiwibWF0Y2giLCJ0ZXN0IiwiZXhlYyIsInNsaWNlIiwiam9pbiIsInJlcGxhY2UiLCJhcHBOYW1lIiwiYXBwVmVyc2lvbiIsInNwbGljZSIsImluZGV4T2YiLCJPUyIsImlzQ2hyb21lIiwiaXNGaXJlZm94IiwiaXNPcGVyYSIsImlzU2FmYXJpIiwiaXNJRSIsImlzRWRnZSIsImlzV2luZG93cyIsImlzTWFjIiwiaXNVTklYIiwiaXNMaW51eCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQSxJQUFJQSxLQUFNLEdBQUlDLE9BSWRELEtBQUlFLFFBQVcsV0FDWCxHQUE4QkMsR0FBMUJILEVBQUtJLFVBQVVDLFVBQ25CQyxFQUFHTixFQUFJTyxNQUFNLG1FQUNiLE9BQUcsV0FBV0MsS0FBS0YsRUFBRSxLQUNqQkgsRUFBTSxrQkFBa0JNLEtBQUtULE9BQ3RCLE9BQU9HLEVBQUksSUFBTSxLQUVqQixXQUFSRyxFQUFFLEtBQ0RILEVBQUtILEVBQUlPLE1BQU0sdUJBQ04sTUFBTkosR0FBbUJBLEVBQUlPLE1BQU0sR0FBR0MsS0FBSyxLQUFLQyxRQUFRLE1BQU8sVUFFaEVOLEVBQUdBLEVBQUUsSUFBS0EsRUFBRSxHQUFJQSxFQUFFLEtBQU1GLFVBQVVTLFFBQVNULFVBQVVVLFdBQVksTUFDeEIsT0FBckNYLEVBQUtILEVBQUlPLE1BQU0scUJBQTRCRCxFQUFFUyxPQUFPLEVBQUcsRUFBR1osRUFBSSxJQUMzREcsRUFBRUssS0FBSyxTQUt1QixJQUFyQ1AsVUFBVVUsV0FBV0UsUUFBUSxTQUFZaEIsSUFBSWlCLEdBQUssV0FDYixJQUFyQ2IsVUFBVVUsV0FBV0UsUUFBUSxTQUFZaEIsSUFBSWlCLEdBQUssU0FDYixJQUFyQ2IsVUFBVVUsV0FBV0UsUUFBUSxTQUFZaEIsSUFBSWlCLEdBQUssUUFDWCxJQUF2Q2IsVUFBVVUsV0FBV0UsUUFBUSxXQUFjaEIsSUFBSWlCLEdBQUssU0FHeERqQixJQUFJa0IsU0FBV2xCLElBQUlFLFFBQVFjLFFBQVEsVUFBWSxHQUMvQ2hCLElBQUltQixVQUFZbkIsSUFBSUUsUUFBUWMsUUFBUSxXQUFhLEdBQ2pEaEIsSUFBSW9CLFFBQVVwQixJQUFJRSxRQUFRYyxRQUFRLFNBQVcsR0FDN0NoQixJQUFJcUIsU0FBV3JCLElBQUlFLFFBQVFjLFFBQVEsVUFBWSxHQUMvQ2hCLElBQUlzQixLQUFPdEIsSUFBSUUsUUFBUWMsUUFBUSxNQUFRLEdBQ3ZDaEIsSUFBSXVCLE9BQVN2QixJQUFJRSxRQUFRYyxRQUFRLFFBQVUsR0FHM0NoQixJQUFJd0IsVUFBdUIsWUFBWHhCLElBQUlpQixHQUNwQmpCLElBQUl5QixNQUFtQixVQUFYekIsSUFBSWlCLEdBQ2hCakIsSUFBSTBCLE9BQW9CLFNBQVgxQixJQUFJaUIsR0FDakJqQixJQUFJMkIsUUFBcUIsVUFBWDNCLElBQUlpQiIsImZpbGUiOiJicm93c2VyLWRldGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkVUEgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4vL0Jyb3dzZXIgUHJvcGVydHlcclxuLy9zdGFja292ZXJmbG93LmNvbS9xLzU5MTY5MDBcclxuJFVBLmJyb3dzZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIHZhciAkVUE9IG5hdmlnYXRvci51c2VyQWdlbnQsIHRlbSxcclxuICAgIE09ICRVQS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpIHx8IFtdO1xyXG4gICAgaWYoL3RyaWRlbnQvaS50ZXN0KE1bMV0pKXtcclxuICAgICAgICB0ZW09ICAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWMoJFVBKSB8fCBbXTtcclxuICAgICAgICByZXR1cm4gJ0lFICcrKHRlbVsxXSB8fCAnJyk7XHJcbiAgICB9XHJcbiAgICBpZihNWzFdPT09ICdDaHJvbWUnKXtcclxuICAgICAgICB0ZW09ICRVQS5tYXRjaCgvXFxiKE9QUnxFZGdlKVxcLyhcXGQrKS8pO1xyXG4gICAgICAgIGlmKHRlbSE9IG51bGwpIHJldHVybiB0ZW0uc2xpY2UoMSkuam9pbignICcpLnJlcGxhY2UoJ09QUicsICdPcGVyYScpO1xyXG4gICAgfVxyXG4gICAgTT0gTVsyXT8gW01bMV0sIE1bMl1dOiBbbmF2aWdhdG9yLmFwcE5hbWUsIG5hdmlnYXRvci5hcHBWZXJzaW9uLCAnLT8nXTtcclxuICAgIGlmKCh0ZW09ICRVQS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKSkhPSBudWxsKSBNLnNwbGljZSgxLCAxLCB0ZW1bMV0pO1xyXG4gICAgcmV0dXJuIE0uam9pbignICcpO1xyXG59KSgpO1xyXG5cclxuLy9PUyBQcm9wZXJ0eVxyXG4vL2phdmFzY3JpcHRlci5uZXQvZmFxL29wZXJhdGluLmh0bVxyXG5pZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIldpblwiKSE9LTEpICRVQS5PUyA9IFwiV2luZG93c1wiO1xyXG5pZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1hY1wiKSE9LTEpICRVQS5PUyA9IFwiTWFjT1NcIjtcclxuaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJYMTFcIikhPS0xKSAkVUEuT1MgPSBcIlVOSVhcIjtcclxuaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJMaW51eFwiKSE9LTEpICRVQS5PUyA9IFwiTGludXhcIjtcclxuXHJcbi8vQnJvd3NlciBCb29sZWFuc1xyXG4kVUEuaXNDaHJvbWUgPSAkVUEuYnJvd3Nlci5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xyXG4kVUEuaXNGaXJlZm94ID0gJFVBLmJyb3dzZXIuaW5kZXhPZignRmlyZWZveCcpID4gLTE7XHJcbiRVQS5pc09wZXJhID0gJFVBLmJyb3dzZXIuaW5kZXhPZignT3BlcmEnKSA+IC0xO1xyXG4kVUEuaXNTYWZhcmkgPSAkVUEuYnJvd3Nlci5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xyXG4kVUEuaXNJRSA9ICRVQS5icm93c2VyLmluZGV4T2YoJ0lFJykgPiAtMTtcclxuJFVBLmlzRWRnZSA9ICRVQS5icm93c2VyLmluZGV4T2YoJ0VkZ2UnKSA+IC0xO1xyXG5cclxuLy9PUyBCb29sZWFuc1xyXG4kVUEuaXNXaW5kb3dzID0gJFVBLk9TID09PSAnV2luZG93cyc7XHJcbiRVQS5pc01hYyA9ICRVQS5PUyA9PT0gJ01hY09TJztcclxuJFVBLmlzVU5JWCA9ICRVQS5PUyA9PT0gJ1VOSVgnO1xyXG4kVUEuaXNMaW51eCA9ICRVQS5PUyA9PT0gJ0xpbnV4JzsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
