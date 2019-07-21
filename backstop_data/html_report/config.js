report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_dexcite_top_page_0_document_0_phone.png",
        "test": "../bitmaps_test/20190721-121103/backstop_default_dexcite_top_page_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_dexcite_top_page_0_document_0_phone.png",
        "label": "d.excite top page.",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://d.excite.co.jp/",
        "referenceUrl": "https://d.excite.co.jp/",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.03",
          "analysisTime": 199
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_dexcite_top_page_0_document_1_tablet.png",
        "test": "../bitmaps_test/20190721-121103/backstop_default_dexcite_top_page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_dexcite_top_page_0_document_1_tablet.png",
        "label": "d.excite top page.",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://d.excite.co.jp/",
        "referenceUrl": "https://d.excite.co.jp/",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.04",
          "analysisTime": 184
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});