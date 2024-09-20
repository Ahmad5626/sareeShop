
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/polyfills-legacy.CHCJW8CP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/app-legacy.Crl03OeH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedContact-legacy.DKfcE4K4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DeliveryMethodSelectorSection-legacy.BdaUg_qI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedDeliveryAddress-legacy.Bgt2oDV3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/Rollup-legacy.BD0JAXns.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useUnauthenticatedErrorModal-legacy.B8h1OtrU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShopPayLogo-legacy.BRBx3VEq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PurchaseOptionsAgreement-legacy.DwiQZ5qH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/Option-legacy.Ca8FHn0h.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PickupPointCarrierLogo-legacy.03wd-1yg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/hooks-legacy.C2xqNPOU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/LegacyVaultedShippingMethods-legacy.xsM1459w.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/OnePageModal-legacy.PT4yY0fG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useShowShopPayOptin-legacy.D6UFwPEi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/Section-legacy.DB7ICTEc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/google-pay-legacy.Bvwwi8-q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PayButtonSection-legacy.2ibL_RY8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/context-legacy.CY_-nHkb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/publishMessage-legacy.6GC02G2z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DutyOptions-legacy.aeCzFhxu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/SubscriptionPriceBreakdown-legacy.CZo2BDAs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/StockProblemsLineItemList-legacy.Bm6oM4I3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/component-ShopPayVerificationSwitch-legacy.CiOQCt_R.js"];
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
  