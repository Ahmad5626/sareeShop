
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/polyfills-legacy.B69mnRG5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/app-legacy.BmqkUGUL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/VaultedContact-legacy.BqiwM4_T.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DeliveryMethodSelectorSection-legacy.BOhbyU1M.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/VaultedDeliveryAddress-legacy.BhzSIp4m.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Rollup-legacy.CNuI5BaQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useUnauthenticatedErrorModal-legacy.BGZGAjm-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayLogo-legacy.B9WlPGmk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PurchaseOptionsAgreement-legacy.D-9bcfCt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Option-legacy.B3gllOuW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PickupPointCarrierLogo-legacy.DpGozfZI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/hooks-legacy.BqGewMOH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LegacyVaultedShippingMethods-legacy.GpcZ0mN5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/OnePageModal-legacy.DEDOF5Pz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useShowShopPayOptin-legacy.Ic2RFbJO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Section-legacy.gkDwjwPF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/google-pay-legacy.BbsYLYh7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PayButtonSection-legacy.BZCuv8pw.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/context-legacy.DeNosAb1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/constants-legacy.0SiXoVHH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ButtonWithRegisterWebPixel-legacy.C70mwtNI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/NoAddressLocationFullDetour-legacy.05oQ5py0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/publishMessage-legacy.Dp4gt0E5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DutyOptions-legacy.BcmNKbnt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/SubscriptionPriceBreakdown-legacy.dtDm-HW_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/StockProblemsLineItemList-legacy.BHlp3Lzv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/component-ShopPayVerificationSwitch-legacy.BTCf5Hid.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  