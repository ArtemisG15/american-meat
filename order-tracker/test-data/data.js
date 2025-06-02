const products = {
    'terlingua': {
    required: { 
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      vaginalInsert: ['medium', 'large'], 
      cervixDepth: ['3', '5', '7'], 
      analInsert: ['medium', 'large'] 
    },
    optional: { 
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      internalClitoralHood: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      analRing: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      fur: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ] 
    },
  },
  'two-hole-pony': {
    required: { 
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      vaginalInsert: ['tight', 'standard', 'large-ribbed'], 
      analInsert: ['tight', 'standard', 'large-ribbed'] 
    },
    optional: { 
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      internalClitoral: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      fullFace: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      bovineSpot: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      analRing: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
  },
  'two-hole-cheval': {
    required: { 
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      vaginalInsert: ['tight', 'standard', 'large-ribbed'], 
      analInsert: ['tight', 'standard', 'large-ribbed'] 
    },
    optional: { 
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      internalClitoral: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      fullFace: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ], 
      bovineSpot: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      analRing: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'F-1.5em', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
  },
  'two-hole-canine': {
    required: {
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      vaginalInsert: ['medium', 'large'],
      analInsert: ['medium', 'large']
    },
    optional: {
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      internalClitoral: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      vulvaAnalTeat: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      fur: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
  },
  'deer': {
    required: {
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
    optional: {
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      internalClitoral: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      vulvaAnalHighlight: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      fur: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
  },
  'dragon': {
    required: {
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
    optional: {
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      internalClitoral: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      vulvaHighlight: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      analRing: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
  },
  'one-hole-canine': {
    required: {
      bodyColor: [
        'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      analInsert: ['medium', 'large']
    },
    optional: {
      marblingColor: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      internals: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple',
        'FleshyPink', 'BubbleGumPink', 'MarshmallowPink'
      ],
      analRing: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ],
      fur: [
        'none', 'Black', 'DarkGray', 'MediumGray', 'LightGray', 'White', 'CottonCandyPink', 'Pink', 'NeonPink',
        'Red', 'CherryPie', 'DrakeRed', 'BurntOrange', 'FireOrange', 'NeonOrange', 'Salmon', 'Flesh',
        'PineappleSmoothie', 'Orange', 'NeonTangerine', 'FlutterYellow', 'NeonYellow', 'BananaYellow',
        'CustardYellow', 'GoldMetallic', 'Tan', 'Buckskin', 'OriginalDogBrown', 'CopperRed', 'Brown',
        'Chocolate', 'DarkChocolate', 'MintGreen', 'CartoonDragonGreen', 'Cyan', 'LyricGreen',
        'ClassicGreen', 'NeonGreen', 'Olive', 'DragonGreen', 'TwilightSpinachMetallic', 'FrostedMetallic',
        'CottonCandyBlue', 'RainbowBlue', 'PupperBlue', 'NeonBlue', 'GrayBlue', 'DragonBlue', 'LunarBlue',
        'Blurple', 'CottonCandyPurple', 'DragonPurple', 'MagicPurple', 'Lilac', 'NeonPurple', 'DarkMagicPurple', 'RedishPurple'
      ]
    },
  },
};
  
const orders = [
  {
    orderNumber: "2001",
    email: "alice.smith@example.com",
    status: "Order Placed",
    progress: 2,
    items: [
      {
        product: "terlingua",
        options: {
          bodyColor: "NeonBlue",
          vaginalInsert: "medium",
          cervixDepth: "5",
          analInsert: "large",
          marblingColor: "none",
          internalClitoralHood: "FleshyPink",
          analRing: "Black",
          fur: "none",
        },
      },
    ],
    address: "123 Main St, Los Angeles, CA 90001, USA",
  },
  {
    orderNumber: "2002",
    email: "bob.jones@example.com",
    status: "Order Placed",
    progress: 4,
    items: [
      {
        product: "two-hole-pony",
        options: {
          bodyColor: "CottonCandyPink",
          vaginalInsert: "standard",
          analInsert: "tight",
          marblingColor: "White",
          internalClitoral: "none",
          fullFace: "Black",
          bovineSpot: "none",
          analRing: "NeonPink",
        },
      },
      {
        product: "two-hole-pony",
        options: {
          bodyColor: "NeonBlue",
          vaginalInsert: "standard",
          analInsert: "tight",
          marblingColor: "White",
          internalClitoral: "none",
          fullFace: "Black",
          bovineSpot: "none",
          analRing: "NeonPink",
        },
      },
      {
        product: "terlingua",
        options: {
          bodyColor: "NeonBlue",
          vaginalInsert: "medium",
          cervixDepth: "5",
          analInsert: "large",
          marblingColor: "none",
          internalClitoralHood: "FleshyPink",
          analRing: "Black",
          fur: "none",
        },
      },
      {
        product: "deer",
        options: {
          bodyColor: "Buckskin",
          marblingColor: "none",
          internalClitoral: "FleshyPink",
          vulvaAnalHighlight: "White",
          fur: "NeonPink",
        },
      },
      {
        product: "two-hole-canine",
        options: {
          bodyColor: "DragonGreen",
          vaginalInsert: "large",
          analInsert: "medium",
          marblingColor: "none",
          internalClitoral: "BubbleGumPink",
          vulvaAnalTeat: "White",
          fur: "none",
        },
      },
      {
        product: "dragon",
        options: {
          bodyColor: "DarkMagicPurple",
          marblingColor: "NeonYellow",
          internalClitoral: "none",
          vulvaHighlight: "CottonCandyBlue",
          analRing: "White",
        },
      },
      {
        product: "dragon",
        options: {
          bodyColor: "DarkMagicPurple",
          marblingColor: "NeonYellow",
          internalClitoral: "none",
          vulvaHighlight: "CottonCandyBlue",
          analRing: "White",
        },
      },
      {
        product: "dragon",
        options: {
          bodyColor: "DarkMagicPurple",
          marblingColor: "NeonYellow",
          internalClitoral: "none",
          vulvaHighlight: "CottonCandyBlue",
          analRing: "White",
        },
      },
      {
        product: "two-hole-cheval",
        options: {
          bodyColor: "LunarBlue",
          vaginalInsert: "large-ribbed",
          analInsert: "standard",
          marblingColor: "none",
          internalClitoral: "MarshmallowPink",
          fullFace: "none",
          bovineSpot: "Black",
          analRing: "none",
        },
      },
      {
        product: "one-hole-canine",
        options: {
          bodyColor: "Chocolate",
          analInsert: "large",
          marblingColor: "none",
          internals: "FleshyPink",
          analRing: "Black",
          fur: "Brown",
        },
      },
    ],
    address: "456 Granville St, Vancouver, BC V6C 1T2, Canada",
  },
  {
    orderNumber: "2003",
    email: "carol.wilson@example.com",
    status: "In Production",
    progress: 1,
    items: [
      {
        product: "two-hole-canine",
        options: {
          bodyColor: "DragonGreen",
          vaginalInsert: "large",
          analInsert: "medium",
          marblingColor: "none",
          internalClitoral: "BubbleGumPink",
          vulvaAnalTeat: "White",
          fur: "none",
        },
      },
    ],
    address: "789 Oxford St, London, UK W1D 1BS, United Kingdom",
  },
  {
    orderNumber: "2004",
    email: "david.brown@example.com",
    status: "In Production",
    progress: 2,
    items: [
      {
        product: "dragon",
        options: {
          bodyColor: "DarkMagicPurple",
          marblingColor: "NeonYellow",
          internalClitoral: "none",
          vulvaHighlight: "CottonCandyBlue",
          analRing: "none",
        },
      },
      {
        product: "one-hole-canine",
        options: {
          bodyColor: "Chocolate",
          analInsert: "large",
          marblingColor: "none",
          internals: "FleshyPink",
          analRing: "Black",
          fur: "Brown",
        },
      },
    ],
    address: "101 Collins St, Melbourne, VIC 3000, Australia",
  },
  {
    orderNumber: "2005",
    email: "emma.davis@example.com",
    status: "Shipped",
    progress: 1,
    items: [
      {
        product: "terlingua",
        options: {
          bodyColor: "FireOrange",
          vaginalInsert: "large",
          cervixDepth: "7",
          analInsert: "medium",
          marblingColor: "GoldMetallic",
          internalClitoralHood: "none",
          analRing: "none",
          fur: "White",
        },
      },
    ],
    address: "202 5th Ave, New York, NY 10001, USA",
  },
  {
    orderNumber: "2006",
    email: "frank.miller@example.com",
    status: "Shipped",
    progress: 2,
    items: [
      {
        product: "two-hole-cheval",
        options: {
          bodyColor: "LunarBlue",
          vaginalInsert: "large-ribbed",
          analInsert: "standard",
          marblingColor: "none",
          internalClitoral: "MarshmallowPink",
          fullFace: "none",
          bovineSpot: "Black",
          analRing: "none",
        },
      },
      {
        product: "deer",
        options: {
          bodyColor: "Tan",
          marblingColor: "none",
          internalClitoral: "none",
          vulvaAnalHighlight: "Flesh",
          fur: "none",
        },
      },
    ],
    address: "303 Queen St, Toronto, ON M5V 2A4, Canada",
  },
  {
    orderNumber: "2007",
    email: "grace.taylor@example.com",
    status: "Delivered",
    progress: 1,
    items: [
      {
        product: "one-hole-canine",
        options: {
          bodyColor: "NeonGreen",
          analInsert: "medium",
          marblingColor: "none",
          internals: "none",
          analRing: "CottonCandyPink",
          fur: "none",
        },
      },
    ],
    address: "404 George St, Sydney, NSW 2000, Australia",
  },
  {
    orderNumber: "2008",
    email: "henry.moore@example.com",
    status: "Delivered",
    progress: 1,
    items: [
      {
        product: "dragon",
        options: {
          bodyColor: "RedishPurple",
          marblingColor: "none",
          internalClitoral: "FleshyPink",
          vulvaHighlight: "none",
          analRing: "Black",
        },
      },
      {
        product: "two-hole-pony",
        options: {
          bodyColor: "Blurple",
          vaginalInsert: "tight",
          analInsert: "large-ribbed",
          marblingColor: "NeonBlue",
          internalClitoral: "none",
          fullFace: "White",
          bovineSpot: "none",
          analRing: "none",
        },
      },
    ],
    address: "505 High St, Edinburgh, UK EH1 1SR, United Kingdom",
  },
  {
    orderNumber: "2009",
    email: "isabella.jackson@example.com",
    status: "Order Placed",
    progress: 5,
    items: [
      {
        product: "terlingua",
        options: {
          bodyColor: "CottonCandyBlue",
          vaginalInsert: "medium",
          cervixDepth: "3",
          analInsert: "large",
          marblingColor: "none",
          internalClitoralHood: "none",
          analRing: "NeonYellow",
          fur: "none",
        },
      },
    ],
    address: "606 King St W, Kitchener, ON N2G 1C7, Canada",
  },
  {
    orderNumber: "2010",
    email: "james.white@example.com",
    status: "In Production",
    progress: 3,
    items: [
      {
        product: "two-hole-canine",
        options: {
          bodyColor: "OriginalDogBrown",
          vaginalInsert: "medium",
          analInsert: "large",
          marblingColor: "Tan",
          internalClitoral: "none",
          vulvaAnalTeat: "none",
          fur: "Buckskin",
        },
      },
      {
        product: "dragon",
        options: {
          bodyColor: "NeonPurple",
          marblingColor: "none",
          internalClitoral: "BubbleGumPink",
          vulvaHighlight: "none",
          analRing: "none",
        },
      },
    ],
    address: "707 Market St, San Francisco, CA 94103, USA",
  },
  {
    orderNumber: "2011",
    email: "kim.minsoo@example.com",
    status: "Order Placed",
    progress: 2,
    items: [
      {
        product: "dragon",
        options: {
          bodyColor: "NeonPurple",
          marblingColor: "none",
          internalClitoral: "BubbleGumPink",
          vulvaHighlight: "none",
          analRing: "none",
        },
      },
    ],
    address: "123 Teheran-ro, Gangnam-gu, Seoul, 06020, Republic of Korea",
    customFields: {
      pccc: "P123456789012",
    },
  },
];