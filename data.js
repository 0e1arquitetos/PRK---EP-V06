var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.34924656505438456,
          "pitch": 0.05627666391072417,
          "rotation": 0,
          "target": "1-corredor"
        },
        {
          "yaw": 2.4190544888049734,
          "pitch": 0.10361421355436562,
          "rotation": 0,
          "target": "3-lavabo"
        },
        {
          "yaw": 1.055086588743185,
          "pitch": 0.11615908401345187,
          "rotation": 0,
          "target": "2-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corredor",
      "name": "CORREDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20934890826292474,
          "pitch": 0.23309561728610717,
          "rotation": 0,
          "target": "5-quarto-casal"
        },
        {
          "yaw": -0.573850807184666,
          "pitch": 0.34537585558411976,
          "rotation": 0,
          "target": "6-quarto-sofia"
        },
        {
          "yaw": 2.399002957885985,
          "pitch": 0.3387834631494062,
          "rotation": 0,
          "target": "4-office"
        },
        {
          "yaw": 2.9531645819019463,
          "pitch": 0.28889955229518804,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2462141368271702,
          "pitch": 0.01437780532418742,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lavabo",
      "name": "LAVABO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9228598167717479,
          "pitch": 0.5183453922403487,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9082853600372651,
          "pitch": 0.2697954213717999,
          "rotation": 0,
          "target": "1-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-quarto-casal",
      "name": "QUARTO CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9732780054158123,
          "pitch": 0.1776727855762381,
          "rotation": 0,
          "target": "1-corredor"
        },
        {
          "yaw": 2.428166917012202,
          "pitch": 0.231572990898254,
          "rotation": 0,
          "target": "8-banho-casal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-quarto-sofia",
      "name": "QUARTO SOFIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22656007045014803,
          "pitch": 0.25789517572767373,
          "rotation": 0,
          "target": "7-banho-sofia"
        },
        {
          "yaw": 0.8879976389643645,
          "pitch": 0.23855727323106812,
          "rotation": 0,
          "target": "1-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banho-sofia",
      "name": "BANHO SOFIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0442188237451253,
          "pitch": 0.4956421910533546,
          "rotation": 0,
          "target": "6-quarto-sofia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-banho-casal",
      "name": "BANHO CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.844710206846269,
          "pitch": 0.5594094124298223,
          "rotation": 0,
          "target": "5-quarto-casal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PRK - V06",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
