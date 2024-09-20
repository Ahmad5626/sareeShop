
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/polyfills-legacy.eo0yalc5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/app-legacy.DYutxm0u.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/VaultedContact-legacy.7ebr70Aa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/DeliveryMethodSelectorSection-legacy.C2EFm2Mc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/VaultedDeliveryAddress-legacy.DukqBfEd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/Rollup-legacy.Ah_rPR3K.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/useUnauthenticatedErrorModal-legacy.CVSuztvQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/ShopPayLogo-legacy.CR6lK3T2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/PurchaseOptionsAgreement-legacy.DK14-DpX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/Option-legacy.Bx7QOBUs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/PickupPointCarrierLogo-legacy.DxQvG7Qz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/hooks-legacy.cNTN8n-k.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/LegacyVaultedShippingMethods-legacy.DswLfP4Z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/OnePageModal-legacy.CYMIyCC5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/useShowShopPayOptin-legacy.RxJJn9f5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/Section-legacy.C8DAqP9q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/google-pay-legacy.D2FUhKUv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/PayButtonSection-legacy.rEd8V8l-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/context-legacy.BfD86j6C.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/constants-legacy.B9DiKyMi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/ButtonWithRegisterWebPixel-legacy.DRKw2zgF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/NoAddressLocationFullDetour-legacy.BY1-cchP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/publishMessage-legacy.QKxo2Evj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/DutyOptions-legacy.Df3wDeNs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/SubscriptionPriceBreakdown-legacy.RHjwN5zP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/StockProblemsLineItemList-legacy.CdRaA84X.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/component-ShopPayVerificationSwitch-legacy.CQjqCj18.js"];
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
  