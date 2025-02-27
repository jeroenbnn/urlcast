const APPLICATION_ID = "A25F6603";
const NAMESPACE_URN = "urn:x-cast:chromecast-office-dashboard.firebaseapp.com";

window['__onGCastApiAvailable'] = function (loaded, errorInfo) {
    if (!loaded) {
        console.log(errorInfo);
    }
};

$(document).ready(function () {
    $("#open").click(function () {
        open();
    });
});

open = function () {
    var context = cast.framework.CastContext.getInstance();

    context.setOptions({
        receiverApplicationId: "A25F6603",
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
        resumeSavedSession: true,
    });

    context.requestSession().then(function (e) {
        var url = $("#url").val();
        var s = context.getCurrentSession();
        s.setVolume(80).then(function () {
            console.log(url);
            return s.sendMessage(NAMESPACE_URN, {
                "url": url
            });
        }).then(function () {
            context.endCurrentSession(false);
        }).catch(function (e) {
            console.log(e);
        })

    }).catch(function (e) {
        console.log(e);
    })
};



$(document).ready(function () {
    $("#open2").click(function () {
        open2();
    });
});

open2 = function () {
    var context = cast.framework.CastContext.getInstance();

    context.setOptions({
        receiverApplicationId: "A25F6603",
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
        resumeSavedSession: true,
    });

    context.requestSession().then(function (e) {
        var url = $("#url2").val();
        var s = context.getCurrentSession();
        s.setVolume(80).then(function () {
            console.log(url);
            return s.sendMessage(NAMESPACE_URN, {
                "url": url
            });
        }).then(function () {
            context.endCurrentSession(false);
        }).catch(function (e) {
            console.log(e);
        })

    }).catch(function (e) {
        console.log(e);
    })
};


$(document).ready(function () {
  $("#open3").click(function () {
      open2();
  });
});

open3= function () {
  var context = cast.framework.CastContext.getInstance();

  context.setOptions({
      receiverApplicationId: "A25F6603",
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
      resumeSavedSession: true,
  });

  context.requestSession().then(function (e) {
      var url = $("#url3").val();
      var s = context.getCurrentSession();
      s.setVolume(80).then(function () {
          console.log(url);
          return s.sendMessage(NAMESPACE_URN, {
              "url": url
          });
      }).then(function () {
          context.endCurrentSession(false);
      }).catch(function (e) {
          console.log(e);
      })

  }).catch(function (e) {
      console.log(e);
  })
};