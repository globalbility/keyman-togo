if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_gl_togo());
}
function Keyboard_gl_togo()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_gl_togo";
  this.KN="TogoKey";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Charis SIL"',K102:1};
  this.KDU=0;
  this.KV.KLS={
    "default": ["²","&","é","\"","'","(","-","è","_","ç","à",")","=","","","","a","z","e","r","t","y","u","i","o","p","◌̂","$","*","","","","q","s","d","f","g","h","j","k","l","m","ù","","","","","","<","w","x","c","v","b","n",",",";",":","!","","","","","",""],
    "shift": ["","1","2","3","4","5","6","7","8","9","0","°","+","","","","A","Z","E","R","T","Y","U","I","O","P","◌̈","£","µ","","","","Q","S","D","F","G","H","J","K","L","M","%","","","","","",">","W","X","C","V","B","N","?",".","/","§","","","","","",""],
    "leftctrl": ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
    "rightalt": ["","","◌̃","#","{","[","|","◌̀","\\","^","@","]","}","","","","ǝ","ʒ","€","ɛ","ɗ","ƴ","ʊ","ɩ","ɔ","ɔ","◌̌","¤","◌́","","","","","","ɖ","ƒ","ɣ","ĥ","ɨ","","","ɲ","◌̀","","","","","","","","","","ʋ","ɓ","ŋ","","","◌̄","◌̃","","","","","",""],
    "rightalt-shift": ["","","","","","","","","","","","","","","","","Ǝ","Ʒ","","Ɛ","Ɗ","Ƴ","Ʊ","Ɩ","Ɔ","Ɔ","","","","","","","","","Ɖ","Ƒ","Ɣ","Ĥ","Ɨ","","","Ɲ","","","","","","","","","","","Ʋ","Ɓ","Ŋ","","","","","","","","","",""],
    "leftctrl-leftalt": ["","","◌̃","#","{","[","|","◌̀","\\","^","@","]","}","","","","","ʒ","€","ɛ","ɗ","ƴ","ʊ","ɩ","ɔ","","◌̌","¤","◌́","","","","ǝ","","ɖ","ƒ","ɣ","ĥ","ɨ","","","ɲ","◌̀","","","","","","","","","","ʋ","ɓ","ŋ","","","◌̄","◌̃","","","","","",""],
    "leftctrl-leftalt-shift": ["","","","","","","","","","","","","","","","","","Ʒ","","Ɛ","Ɗ","Ƴ","Ʊ","Ɩ","Ɔ","","","","","","","","Ǝ","","Ɖ","Ƒ","Ɣ","Ĥ","Ɨ","","","Ɲ","","","","","","","","","","","Ʋ","Ɓ","Ŋ","","","","","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KH='';
  this.KM=0;
  this.KBVER="0.8";
  this.KMBM=modCodes.LCTRL | modCodes.RCTRL | modCodes.LALT | modCodes.RALT | modCodes.SHIFT /* 0x001F */;
  this.KVKD="T_EZH T_OPEN_E T_D_HOOK T_Y_HOOK T_UPSILON T_IOTA T_OPEN_O T_TURNED_E T_D_TAIL T_F_HOOK T_GAMMA T_H_03 T_N_LEFT_HOOK T_V_HOOK T_B_HOOK T_ENG T_I_STROKE T_PERIOD T_GUILLEMENT T_DBGUILLEMENT T_QUOTE T_DBQUOTE T_A_02 T_E_02 T_I_02 T_O_02 T_U_02 T_M_02 T_N_02 T_OPEN_E_02 T_IOTA_02 T_OPEN_O_02 T_TIRNED_E_02 T_TURNED_E_02 T_V_HOOK_02 T_UPSILON_02 T_ENG_02 T_A_03 T_E_03 T_I_03 T_O_03 T_U_03 T_OPEN_E_03 T_IOTA_03 T_OPEN_O_03 T_TURNED_E_03 T_V_HOOK_03 T_UPSILON_03 T_A_01 T_E_01 T_I_01 T_O_01 T_U_01 T_N_01 T_OPEN_E_01 T_IOTA_01 T_OPEN_O_01 T_TIRNED_E_01 T_TURNED_E_01 T_V_HOOK_01 T_UPSILON_01 T_M_01 T_ENG_01 T_A_04 T_N_04 T_O_04 T_E_04 T_I_04 T_U_04 T_OPEN_E_04 T_IOTA_04 T_OPEN_O_04 T_TURNED_E_04 T_A_08 T_E_08 T_I_08 T_O_08 T_U_08 T_Y_08 T_A_07 T_E_07 T_I_07 T_O_07 T_U_07 T_OPEN_E_07 T_IOTA_07 T_OPEN_O_07 T_TURNED_E_07 T_V_HOOK_07 T_UPSILON_07 T_A_09 T_E_09 T_I_09 T_O_09 T_U_09 T_OPEN_E_09 T_IOTA_09 T_OPEN_O_09 T_TURNED_E_09 T_V_HOOK_09 T_UPSILON_09 T_O_06 T_U_06 T_A_06 T_E_06 T_I_06 T_OPEN_E_06 T_OPEN_O_06 T_TURNED_E_06 T_A_05 T_E_05 T_I_05 T_O_05 T_U_05 T_OPEN_E_05 T_OPEN_O_05 T_TURNED_E_05 T_C_10";
  this.KVKL={
  "phone": {
    "font": "Charis SIL",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "a",
                "sk": [
                  {
                    "text": "à",
                    "id": "T_A_01"
                  },
                  {
                    "text": "á",
                    "id": "T_A_02"
                  },
                  {
                    "text": "â",
                    "id": "T_A_03"
                  },
                  {
                    "text": "ã",
                    "id": "T_A_04"
                  },
                  {
                    "text": "ã̀",
                    "id": "T_A_05"
                  },
                  {
                    "text": "ã́",
                    "id": "T_A_06"
                  },
                  {
                    "text": "ā",
                    "id": "T_a_07"
                  },
                  {
                    "text": "ä",
                    "id": "T_A_08"
                  },
                  {
                    "text": "ǎ",
                    "id": "T_A_09"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "z",
                "sk": [
                  {
                    "text": "ʒ",
                    "id": "T_EZH"
                  }
                ]
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "text": "è",
                    "id": "T_E_01"
                  },
                  {
                    "text": "é",
                    "id": "T_E_02"
                  },
                  {
                    "text": "ê",
                    "id": "T_E_03"
                  },
                  {
                    "text": "ẽ",
                    "id": "T_E_04"
                  },
                  {
                    "text": "ẽ̀",
                    "id": "T_E_05"
                  },
                  {
                    "text": "ẽ́",
                    "id": "T_E_06"
                  },
                  {
                    "text": "ē",
                    "id": "T_E_07"
                  },
                  {
                    "text": "ë",
                    "id": "T_E_08"
                  },
                  {
                    "text": " \tě",
                    "id": "T_E_09"
                  },
                  {
                    "text": "ɛ",
                    "id": "T_OPEN_E"
                  },
                  {
                    "text": "ɛ̀",
                    "id": "T_OPEN_E_01"
                  },
                  {
                    "text": "ɛ́",
                    "id": "T_OPEN_E_02"
                  },
                  {
                    "text": "ɛ̂",
                    "id": "T_OPEN_E_03"
                  },
                  {
                    "text": "ɛ̃",
                    "id": "T_OPEN_E_04"
                  },
                  {
                    "text": " \tɛ̃̀",
                    "id": "T_OPEN_E_05"
                  },
                  {
                    "text": "ɛ̃́",
                    "id": "T_OPEN_E_06"
                  },
                  {
                    "text": "ɛ̄",
                    "id": "T_OPEN_E_07"
                  },
                  {
                    "text": "ɛ̌",
                    "id": "T_OPEN_E_09"
                  },
                  {
                    "text": "ǝ",
                    "id": "T_TURNED_E"
                  },
                  {
                    "text": "ǝ̀",
                    "id": "T_TURNED_E_01"
                  },
                  {
                    "text": "ǝ́",
                    "id": "T_TURNED_E_02"
                  },
                  {
                    "text": " \tǝ̂",
                    "id": "T_TURNED_E_03"
                  },
                  {
                    "text": "ǝ̃",
                    "id": "T_TURNED_E_04"
                  },
                  {
                    "text": " \tǝ̃̀",
                    "id": "T_TURNED_E_05"
                  },
                  {
                    "text": "ǝ̃́",
                    "id": "T_TURNED_E_06"
                  },
                  {
                    "text": "ǝ̄",
                    "id": "T_TURNED_E_07"
                  },
                  {
                    "text": "ǝ̌",
                    "id": "T_TURNED_E_09"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y",
                "sk": [
                  {
                    "text": "ƴ",
                    "id": "T_Y_HOOK"
                  },
                  {
                    "text": "ÿ",
                    "id": "T_Y_08"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "text": "ù",
                    "id": "T_U_01"
                  },
                  {
                    "text": "ú",
                    "id": "T_U_02"
                  },
                  {
                    "text": "û",
                    "id": "T_U_03"
                  },
                  {
                    "text": "ũ",
                    "id": "T_u_04"
                  },
                  {
                    "text": "ũ̀",
                    "id": "T_U_05"
                  },
                  {
                    "text": "ṹ",
                    "id": "T_U_06"
                  },
                  {
                    "text": "ū",
                    "id": "T_U_07"
                  },
                  {
                    "text": "ü",
                    "id": "T_U_08"
                  },
                  {
                    "text": "ǔ",
                    "id": "T_U_09"
                  },
                  {
                    "text": "ʊ",
                    "id": "T_UPSILON"
                  },
                  {
                    "text": "ʊ̀",
                    "id": "T_UPSILON_01"
                  },
                  {
                    "text": "ʊ́",
                    "id": "T_UPSILON_02"
                  },
                  {
                    "text": "ʊ̂",
                    "id": "T_UPSILON_03"
                  },
                  {
                    "text": "ʊ̄",
                    "id": "T_UPSILON_07"
                  },
                  {
                    "text": "ʊ̌",
                    "id": "T_UPSILON_09"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "text": "ì",
                    "id": "T_I_01"
                  },
                  {
                    "text": "í",
                    "id": "T_I_02"
                  },
                  {
                    "text": "î",
                    "id": "T_I_03"
                  },
                  {
                    "text": "ĩ",
                    "id": "T_I_04"
                  },
                  {
                    "text": "ĩ̀",
                    "id": "T_I_05"
                  },
                  {
                    "text": "ĩ́",
                    "id": "T_I_06"
                  },
                  {
                    "text": "ī",
                    "id": "T_I_07"
                  },
                  {
                    "text": "ï",
                    "id": "T_I_08"
                  },
                  {
                    "text": "ǐ",
                    "id": "T_I_09"
                  },
                  {
                    "text": "ɨ",
                    "id": "T_I_STROKE"
                  },
                  {
                    "text": "ɩ",
                    "id": "T_IOTA"
                  },
                  {
                    "text": "ɩ̀",
                    "id": "T_IOTA_01"
                  },
                  {
                    "text": "ɩ́",
                    "id": "T_IOTA_02"
                  },
                  {
                    "text": "ɩ̂",
                    "id": "T_IOTA_03"
                  },
                  {
                    "text": "ɩ̄",
                    "id": "T_IOTA_04"
                  },
                  {
                    "text": "ɩ̌",
                    "id": "T_IOTA_09"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "text": "ò",
                    "id": "T_O_01"
                  },
                  {
                    "text": "ò",
                    "id": "T_O_02"
                  },
                  {
                    "text": "ô",
                    "id": "T_O_03"
                  },
                  {
                    "text": "õ",
                    "id": "T_O_04"
                  },
                  {
                    "text": "õ̀",
                    "id": "T_O_05"
                  },
                  {
                    "text": "ṍ",
                    "id": "T_O_06"
                  },
                  {
                    "text": "ō",
                    "id": "T_O_07"
                  },
                  {
                    "text": "ö",
                    "id": "T_O_08"
                  },
                  {
                    "text": "ǒ",
                    "id": "T_O_09"
                  },
                  {
                    "text": "ɔ",
                    "id": "T_OPEN_O"
                  },
                  {
                    "text": "ɔ̀",
                    "id": "T_OPEN_O_01"
                  },
                  {
                    "text": "ɔ́",
                    "id": "T_OPEN_O_02"
                  },
                  {
                    "text": "ɔ̂",
                    "id": "T_OPEN_O_03"
                  },
                  {
                    "text": "ɔ̃",
                    "id": "T_OPEN_O_04"
                  },
                  {
                    "text": "ɔ̃̀",
                    "id": "T_OPEN_O_05"
                  },
                  {
                    "text": "ɔ̃́",
                    "id": "T_OPEN_O_06"
                  },
                  {
                    "text": "ɔ̄",
                    "id": "T_OPEN_O_07"
                  },
                  {
                    "text": "ɔ̌",
                    "id": "T_OPEN_O_09"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              },
              {
                "id": "T_OPEN_E",
                "text": "ɛ",
                "sk": [
                  {
                    "text": "ɛ̀",
                    "id": "T_OPEN_E_01"
                  },
                  {
                    "text": "ɛ́",
                    "id": "T_OPEN_E_02"
                  },
                  {
                    "text": "ɛ̂",
                    "id": "T_OPEN_E_03"
                  },
                  {
                    "text": "ɛ̃",
                    "id": "T_OPEN_E_04"
                  },
                  {
                    "text": "ɛ̃̀",
                    "id": "T_OPEN_E_05"
                  },
                  {
                    "text": "ɛ̃́",
                    "id": "T_OPEN_E_06"
                  },
                  {
                    "text": "ɛ̄",
                    "id": "T_OPEN_E_07"
                  },
                  {
                    "text": "ɛ̌",
                    "id": "T_OPEN_E_09"
                  }
                ]
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "q",
                "pad": ""
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d",
                "sk": [
                  {
                    "text": "ɖ",
                    "id": "T_D_TAIL"
                  },
                  {
                    "text": "ɗ",
                    "id": "T_D_HOOK"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "f",
                "sk": [
                  {
                    "text": "ƒ",
                    "id": "T_F_HOOK"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "g",
                "sk": [
                  {
                    "text": "ɣ",
                    "id": "T_GAMMA"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "h",
                "sk": [
                  {
                    "text": "ĥ",
                    "id": "T_H_03"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "K_COLON",
                "text": "m",
                "sk": [
                  {
                    "text": "m̀",
                    "id": "T_M_01"
                  },
                  {
                    "text": "ḿ",
                    "id": "T_M_02"
                  }
                ]
              },
              {
                "id": "T_OPEN_O",
                "text": "ɔ",
                "sk": [
                  {
                    "text": "ɔ̀",
                    "id": "T_OPEN_O_01"
                  },
                  {
                    "text": "ɔ́",
                    "id": "T_OPEN_O_02"
                  },
                  {
                    "text": "ɔ̂",
                    "id": "T_OPEN_O_03"
                  },
                  {
                    "text": "ɔ̃",
                    "id": "T_OPEN_O_04"
                  },
                  {
                    "text": "ɔ̃̀",
                    "id": "T_OPEN_O_05"
                  },
                  {
                    "text": "ɔ̃́",
                    "id": "T_OPEN_O_06"
                  },
                  {
                    "text": "ɔ̄",
                    "id": "T_OPEN_O_07"
                  },
                  {
                    "text": "ɔ̌",
                    "id": "T_OPEN_O_09"
                  }
                ]
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "w"
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "text": "ç",
                    "id": "T_C_10"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "v",
                "sk": [
                  {
                    "text": "ʋ",
                    "id": "T_V_HOOK"
                  },
                  {
                    "text": "ʋ̀",
                    "id": "T_V_HOOK_01"
                  },
                  {
                    "text": " \tʋ́",
                    "id": "T_V_HOOK_02"
                  },
                  {
                    "text": "ʋ̂",
                    "id": "T_V_HOOK_03"
                  },
                  {
                    "text": "ʋ̄",
                    "id": "T_V_HOOK_07"
                  },
                  {
                    "text": "ʋ̌",
                    "id": "T_V_HOOK_09"
                  }
                ]
              },
              {
                "id": "K_B",
                "text": "b",
                "sk": [
                  {
                    "text": "ɓ",
                    "id": "T_B_HOOK"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "text": "ǹ",
                    "id": "T_N_01"
                  },
                  {
                    "text": "ń",
                    "id": "T_N_02"
                  },
                  {
                    "text": "ñ",
                    "id": "T_N_04"
                  },
                  {
                    "text": "ɲ",
                    "id": "T_N_LEFT_HOOK"
                  },
                  {
                    "text": "ŋ",
                    "id": "T_ENG"
                  },
                  {
                    "text": "ŋ̀",
                    "id": "T_ENG_01"
                  },
                  {
                    "text": "ŋ́",
                    "id": "T_ENG_02"
                  }
                ]
              },
              {
                "id": "T_ENG",
                "text": "ŋ",
                "sk": [
                  {
                    "text": "ŋ̀",
                    "id": "T_ENG_01"
                  },
                  {
                    "text": "ŋ́",
                    "id": "T_ENG_02"
                  }
                ]
              },
              {
                "id": "T_D_TAIL",
                "text": "ɖ"
              },
              {
                "id": "T_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "T_PERIOD",
                    "layer": "shift"
                  },
                  {
                    "text": ":",
                    "id": "K_PERIOD",
                    "layer": "default"
                  },
                  {
                    "text": ";",
                    "id": "K_COMMA",
                    "layer": "default"
                  },
                  {
                    "text": "?",
                    "id": "K_M",
                    "layer": "shift"
                  },
                  {
                    "text": "!",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "‹",
                    "id": "T_GUILLEMENT",
                    "layer": "default"
                  },
                  {
                    "text": "›",
                    "id": "T_GUILLEMENT",
                    "layer": "shift"
                  },
                  {
                    "text": "«",
                    "id": "T_DBGUILLEMENT",
                    "layer": "default"
                  },
                  {
                    "text": "»",
                    "id": "T_DBGUILLEMENT",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "T_QUOTE"
                  },
                  {
                    "text": "\"",
                    "id": "T_DBQUOTE"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "715",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "A",
                "sk": [
                  {
                    "text": "À",
                    "id": "T_A_01"
                  },
                  {
                    "text": "Á",
                    "id": "T_A_02"
                  },
                  {
                    "text": "Â",
                    "id": "T_A_03"
                  },
                  {
                    "text": "Ã",
                    "id": "T_A_04"
                  },
                  {
                    "text": "Ã̀",
                    "id": "T_A_05"
                  },
                  {
                    "text": "Ã́",
                    "id": "T_A_06"
                  },
                  {
                    "text": "Ā",
                    "id": "T_a_07"
                  },
                  {
                    "text": "Ä",
                    "id": "T_A_08"
                  },
                  {
                    "text": "Ǎ",
                    "id": "T_A_09"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "Z",
                "sk": [
                  {
                    "text": "Ʒ",
                    "id": "T_EZH"
                  }
                ]
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "text": "È",
                    "id": "T_E_01"
                  },
                  {
                    "text": "É",
                    "id": "T_E_02"
                  },
                  {
                    "text": "Ê",
                    "id": "T_E_03"
                  },
                  {
                    "text": "Ẽ",
                    "id": "T_E_04"
                  },
                  {
                    "text": "Ẽ̀",
                    "id": "T_E_05"
                  },
                  {
                    "text": "Ẽ́",
                    "id": "T_E_06"
                  },
                  {
                    "text": "Ē",
                    "id": "T_E_07"
                  },
                  {
                    "text": "Ë",
                    "id": "T_E_08"
                  },
                  {
                    "text": "Ě",
                    "id": "T_E_09"
                  },
                  {
                    "text": "Ɛ",
                    "id": "T_OPEN_E"
                  },
                  {
                    "text": " \tƐ̀",
                    "id": "T_OPEN_E_01"
                  },
                  {
                    "text": "Ɛ̀",
                    "id": "T_OPEN_E_02"
                  },
                  {
                    "text": "Ɛ̂",
                    "id": "T_OPEN_E_03"
                  },
                  {
                    "text": "Ɛ̃",
                    "id": "T_OPEN_E_04"
                  },
                  {
                    "text": "Ɛ̃̀",
                    "id": "T_OPEN_E_05"
                  },
                  {
                    "text": "Ɛ̃́",
                    "id": "T_OPEN_E_06"
                  },
                  {
                    "text": "Ɛ̄",
                    "id": "T_OPEN_E_07"
                  },
                  {
                    "text": "Ɛ̌",
                    "id": "T_OPEN_E_09"
                  },
                  {
                    "text": "Ǝ",
                    "id": "T_TURNED_E"
                  },
                  {
                    "text": "Ǝ̀",
                    "id": "T_TURNED_E_01"
                  },
                  {
                    "text": "Ǝ́",
                    "id": "T_TURNED_E_02"
                  },
                  {
                    "text": " Ǝ̂",
                    "id": "T_TURNED_E_03"
                  },
                  {
                    "text": "Ǝ̃",
                    "id": "T_TURNED_E_04"
                  },
                  {
                    "text": "Ǝ̃̀",
                    "id": "T_TURNED_E_05"
                  },
                  {
                    "text": "Ǝ̃́",
                    "id": "T_TURNED_E_06"
                  },
                  {
                    "text": "Ǝ̄",
                    "id": "T_TURNED_E_07"
                  },
                  {
                    "text": "Ǝ̌",
                    "id": "T_TURNED_E_09"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y",
                "sk": [
                  {
                    "text": "Ƴ",
                    "id": "T_Y_HOOK"
                  },
                  {
                    "text": "Ÿ",
                    "id": "T_Y_08"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "text": "Ù",
                    "id": "T_U_01"
                  },
                  {
                    "text": "Ú",
                    "id": "T_U_02"
                  },
                  {
                    "text": "Û",
                    "id": "T_U_03"
                  },
                  {
                    "text": "Ũ",
                    "id": "T_u_04"
                  },
                  {
                    "text": "Ũ̀",
                    "id": "T_U_05"
                  },
                  {
                    "text": "Ṹ",
                    "id": "T_U_06"
                  },
                  {
                    "text": "Ū",
                    "id": "T_U_07"
                  },
                  {
                    "text": "Ü",
                    "id": "T_U_08"
                  },
                  {
                    "text": "Ǔ",
                    "id": "T_U_09"
                  },
                  {
                    "text": "Ʊ",
                    "id": "T_UPSILON"
                  },
                  {
                    "text": "Ʊ̀",
                    "id": "T_UPSILON_01"
                  },
                  {
                    "text": "Ʊ́",
                    "id": "T_UPSILON_02"
                  },
                  {
                    "text": "Ʊ̂",
                    "id": "T_UPSILON_03"
                  },
                  {
                    "text": "Ʊ̄",
                    "id": "T_UPSILON_07"
                  },
                  {
                    "text": "Ʊ̌",
                    "id": "T_UPSILON_09"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "text": "Ì",
                    "id": "T_I_01"
                  },
                  {
                    "text": "Í",
                    "id": "T_I_02"
                  },
                  {
                    "text": "Î",
                    "id": "T_I_03"
                  },
                  {
                    "text": "Ĩ",
                    "id": "T_I_04"
                  },
                  {
                    "text": "Ĩ̀",
                    "id": "T_I_05"
                  },
                  {
                    "text": "Ĩ́",
                    "id": "T_I_06"
                  },
                  {
                    "text": "Ī",
                    "id": "T_I_07"
                  },
                  {
                    "text": "Ï",
                    "id": "T_I_08"
                  },
                  {
                    "text": "Ǐ",
                    "id": "T_I_09"
                  },
                  {
                    "text": "Ɨ",
                    "id": "T_I_STROKE"
                  },
                  {
                    "text": "Ɩ",
                    "id": "T_IOTA"
                  },
                  {
                    "text": "Ɩ̀",
                    "id": "T_IOTA_01"
                  },
                  {
                    "text": "Ɩ́",
                    "id": "T_IOTA_02"
                  },
                  {
                    "text": "Ɩ̂",
                    "id": "T_IOTA_03"
                  },
                  {
                    "text": "Ɩ̄",
                    "id": "T_IOTA_04"
                  },
                  {
                    "text": "Ɩ̌",
                    "id": "T_IOTA_09"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "text": "Ò",
                    "id": "T_O_01"
                  },
                  {
                    "text": "Ó",
                    "id": "T_O_02"
                  },
                  {
                    "text": "Ô",
                    "id": "T_O_03"
                  },
                  {
                    "text": "Õ",
                    "id": "T_O_04"
                  },
                  {
                    "text": "Õ̀",
                    "id": "T_O_05"
                  },
                  {
                    "text": "Ṍ",
                    "id": "T_O_06"
                  },
                  {
                    "text": "Ō",
                    "id": "T_O_07"
                  },
                  {
                    "text": "Ö",
                    "id": "T_O_08"
                  },
                  {
                    "text": "Ǒ",
                    "id": "T_O_09"
                  },
                  {
                    "text": "Ɔ",
                    "id": "T_OPEN_O"
                  },
                  {
                    "text": "Ɔ̀",
                    "id": "T_OPEN_O_01"
                  },
                  {
                    "text": "Ɔ́",
                    "id": "T_OPEN_O_02"
                  },
                  {
                    "text": "Ɔ̂",
                    "id": "T_OPEN_O_03"
                  },
                  {
                    "text": "Ɔ̃",
                    "id": "T_OPEN_O_04"
                  },
                  {
                    "text": "Ɔ̃̀",
                    "id": "T_OPEN_O_05"
                  },
                  {
                    "text": "Ɔ̃́",
                    "id": "T_OPEN_O_06"
                  },
                  {
                    "text": "Ɔ̄",
                    "id": "T_OPEN_O_07"
                  },
                  {
                    "text": "Ɔ̌",
                    "id": "T_OPEN_O_09"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              },
              {
                "id": "T_OPEN_E",
                "text": "Ɛ",
                "sk": [
                  {
                    "text": "Ɛ̀",
                    "id": "T_OPEN_E_01"
                  },
                  {
                    "text": "Ɛ́",
                    "id": "T_OPEN_E_02"
                  },
                  {
                    "text": "Ɛ̂",
                    "id": "T_OPEN_E_03"
                  },
                  {
                    "text": "Ɛ̃",
                    "id": "T_OPEN_E_04"
                  },
                  {
                    "text": "Ɛ̃̀",
                    "id": "T_OPEN_E_05"
                  },
                  {
                    "text": "Ɛ̃́",
                    "id": "T_OPEN_E_06"
                  },
                  {
                    "text": "Ɛ̄",
                    "id": "T_OPEN_E_07"
                  },
                  {
                    "text": "Ɛ̌",
                    "id": "T_OPEN_E_09"
                  }
                ]
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "Q",
                "pad": ""
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D",
                "sk": [
                  {
                    "text": "Ɖ",
                    "id": "T_D_TAIL"
                  },
                  {
                    "text": "Ɗ",
                    "id": "T_D_HOOK"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "F",
                "sk": [
                  {
                    "text": "Ƒ",
                    "id": "T_F_HOOK"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "G",
                "sk": [
                  {
                    "text": "Ɣ",
                    "id": "T_GAMMA"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "H",
                "sk": [
                  {
                    "text": "Ĥ",
                    "id": "T_H_03"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "id": "K_COLON",
                "text": "M",
                "sk": [
                  {
                    "text": "M̀",
                    "id": "T_M_01"
                  },
                  {
                    "text": "Ḿ",
                    "id": "T_M_02"
                  }
                ]
              },
              {
                "id": "T_OPEN_O",
                "text": "Ɔ",
                "sk": [
                  {
                    "text": "Ɔ̀",
                    "id": "T_OPEN_O_01"
                  },
                  {
                    "text": "Ɔ́",
                    "id": "T_OPEN_O_02"
                  },
                  {
                    "text": "Ɔ̂",
                    "id": "T_OPEN_O_03"
                  },
                  {
                    "text": "Ɔ̃",
                    "id": "T_OPEN_O_04"
                  },
                  {
                    "text": "Ɔ̃̀",
                    "id": "T_OPEN_O_05"
                  },
                  {
                    "text": "Ɔ̃́",
                    "id": "T_OPEN_O_06"
                  },
                  {
                    "text": "Ɔ̄",
                    "id": "T_OPEN_O_07"
                  },
                  {
                    "text": "Ɔ̌",
                    "id": "T_OPEN_O_09"
                  }
                ]
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "W"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "text": "Ç",
                    "id": "T_C_10"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "V",
                "sk": [
                  {
                    "text": "Ʋ",
                    "id": "T_V_HOOK"
                  },
                  {
                    "text": "Ʋ̀",
                    "id": "T_V_HOOK_01"
                  },
                  {
                    "text": " Ʋ́",
                    "id": "T_V_HOOK_02"
                  },
                  {
                    "text": "Ʋ̂",
                    "id": "T_V_HOOK_03"
                  },
                  {
                    "text": "Ʋ̄",
                    "id": "T_V_HOOK_07"
                  },
                  {
                    "text": "Ʋ̌",
                    "id": "T_V_HOOK_09"
                  }
                ]
              },
              {
                "id": "K_B",
                "text": "B",
                "sk": [
                  {
                    "text": "Ɓ",
                    "id": "T_B_HOOK"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "text": "Ǹ",
                    "id": "T_N_01"
                  },
                  {
                    "text": "Ń",
                    "id": "T_N_02"
                  },
                  {
                    "text": "Ñ",
                    "id": "T_N_04"
                  },
                  {
                    "text": "Ɲ",
                    "id": "T_N_LEFT_HOOK"
                  },
                  {
                    "text": "Ŋ",
                    "id": "T_ENG"
                  },
                  {
                    "text": "Ŋ̀",
                    "id": "T_ENG_01"
                  },
                  {
                    "text": "Ŋ́",
                    "id": "T_ENG_02"
                  }
                ]
              },
              {
                "id": "T_ENG",
                "text": "Ŋ",
                "sk": [
                  {
                    "text": "Ŋ̀",
                    "id": "T_ENG_01"
                  },
                  {
                    "text": "Ŋ́",
                    "id": "T_ENG_02"
                  }
                ]
              },
              {
                "id": "T_D_TAIL",
                "text": "Ɖ"
              },
              {
                "id": "T_PERIOD",
                "text": ".",
                "layer": "default",
                "sk": [
                  {
                    "text": ",",
                    "id": "T_PERIOD",
                    "layer": "shift"
                  },
                  {
                    "text": ":",
                    "id": "K_PERIOD",
                    "layer": "default"
                  },
                  {
                    "text": ";",
                    "id": "K_COMMA",
                    "layer": "default"
                  },
                  {
                    "text": "?",
                    "id": "K_M",
                    "layer": "shift"
                  },
                  {
                    "text": "!",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "‹",
                    "id": "T_GUILLEMENT",
                    "layer": "default"
                  },
                  {
                    "text": "›",
                    "id": "T_GUILLEMENT",
                    "layer": "shift"
                  },
                  {
                    "text": "«",
                    "id": "T_DBGUILLEMENT",
                    "layer": "default"
                  },
                  {
                    "text": "»",
                    "id": "T_DBGUILLEMENT",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "T_QUOTE"
                  },
                  {
                    "text": "\"",
                    "id": "T_DBQUOTE"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "715",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "layer": "shift"
              },
              {
                "id": "K_2",
                "text": "2",
                "layer": "shift"
              },
              {
                "id": "K_3",
                "text": "3",
                "layer": "shift"
              },
              {
                "id": "K_4",
                "text": "4",
                "layer": "shift"
              },
              {
                "id": "K_5",
                "text": "5",
                "layer": "shift"
              },
              {
                "id": "K_6",
                "text": "6",
                "layer": "shift"
              },
              {
                "id": "K_7",
                "text": "7",
                "layer": "shift"
              },
              {
                "id": "K_8",
                "text": "8",
                "layer": "shift"
              },
              {
                "id": "K_9",
                "text": "9",
                "layer": "shift"
              },
              {
                "id": "K_0",
                "text": "0",
                "layer": "shift"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "U_0024",
                "text": "$",
                "pad": "",
                "layer": "shift"
              },
              {
                "id": "K_RBRKT",
                "text": "£",
                "layer": "shift"
              },
              {
                "id": "U_20AC",
                "text": "€"
              },
              {
                "id": "U_0040",
                "text": "@"
              },
              {
                "id": "U_0023",
                "text": "#"
              },
              {
                "id": "K_QUOTE",
                "text": "%",
                "layer": "shift"
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "K_EQUAL",
                "text": "+",
                "layer": "shift"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "layer": "default"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "U_005B",
                "text": "[",
                "pad": "",
                "sk": [
                  {
                    "text": "<",
                    "id": "K_oE2",
                    "layer": "default"
                  },
                  {
                    "text": "{",
                    "id": "U_003C"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "(",
                "layer": "default"
              },
              {
                "id": "K_HYPHEN",
                "text": ")",
                "layer": "default"
              },
              {
                "id": "U_005D",
                "text": "]",
                "sk": [
                  {
                    "text": ">",
                    "id": "K_oE2",
                    "layer": "shift"
                  },
                  {
                    "text": "}",
                    "id": "U_007D"
                  }
                ]
              },
              {
                "id": "U_005F",
                "text": "_"
              },
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_007C",
                "text": "|"
              },
              {
                "id": "U_005C",
                "text": "\\"
              },
              {
                "id": "K_PERIOD",
                "text": "/",
                "layer": "shift"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "610",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "fontsize": ""
  }
}
;
  this.s_nullKeys=[''];
  this.s_addNullKeys=['','','','','','','','','','',''];
  this.s_addNullKeysOSX=['','','','','','','','','','',''];
  this.s_alphaKey=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_alphaChar="éèçàaAzZeErRtTyYuUiIoOpPqQsSdDfFgGhHjJkKlLmMùwWxXcCvVbBnN";
  this.s_extAlphaKey=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_extAlphaKeyOSX=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_extAlphaTouch=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_extAlphaChar="ʒƷɛƐɗƊƴƳʊƱɩƖɔƆɔƆǝƎɖƉƒƑɣƔĥĤɲƝʋƲɓƁŋŊɨƗ";
  this.s_spaceKey=['','','',''];
  this.s_space=" ";
  this.s_digitKey=['','','','','','','','','',''];
  this.s_digitChar="0123456789";
  this.s_punctuationKey=['','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_punctuationChar="&\"'(-_,?$£=+;.:/%)°*µ²!§<>";
  this.s_addPunctuationKey=['','','','','','','','','','',''];
  this.s_addPunctuationKeyOSX=['','','','','','','','','','',''];
  this.s_addPunctuationChar="€@#{[|\\^¤]}";
  this.s_touchPunctuationKey=['','','','','','','',''];
  this.s_touchPunctuationChar=".,‹›«»'\"";
  this.s_dkf00b4=['','','','','','','','','','','','','','',''];
  this.s_dkt00b4="´ÁáÉéÍíÓóÚúḾḿŃń";
  this.s_dkf00b4Other=['','','','','','','','','','','','','',''];
  this.s_dkf00b4OtherOSX=['','','','','','','','','','','','','',''];
  this.s_dkt00b4Other="ƐɛƖɩƆɔƎǝƲʋƱʊŊŋ";
  this.s_acuteTouchKey=['','','','','','','','','','','','','',''];
  this.s_acuteTouchChar="ÁáÉéÍíÓóÚúḾḿŃń";
  this.s_acuteTouchOtherKey=['','','','','','','','','','','','','',''];
  this.s_acuteTouchOtherChar="ƐɛƖɩƆɔƎǝƲʋƱʊŊŋ";
  this.s_dkf005e=['','','','','','','','','','','','',''];
  this.s_dkt005e="^âÂêÊîÎôÔûÛĥĤ";
  this.s_dkf005eOther=['','','','','','','','','','','',''];
  this.s_dkf005eOtherOSX=['','','','','','','','','','','',''];
  this.s_dkt005eOther="ƐɛƖɩƆɔƎǝƲʋƱʊ";
  this.s_circumflexTouchKey=['','','','','','','','','',''];
  this.s_circumflexTouchChar="âÂêÊîÎôÔûÛ";
  this.s_circumflexTouchOtherKey=['','','','','','','','','','','',''];
  this.s_circumflexTouchOtherChar="ƐɛƖɩƆɔƎǝƲʋƱʊ";
  this.s_dkf0060=['','','','','','','','','','','','',''];
  this.s_dkt0060="`àÀèÈìÌòÒùÙǹǸ";
  this.s_dkf0060Other=['','','','','','','','','','','','','','','',''];
  this.s_dkf0060OtherOSX=['','','','','','','','','','','','','','','',''];
  this.s_dkt0060Other="ƐɛƖɩƆɔƎǝƲʋƱʊMmŊŋ";
  this.s_graveTouchKey=['','','','','','','','','','','',''];
  this.s_graveTouchChar="àÀèÈìÌòÒùÙǹǸ";
  this.s_graveTouchOtherKey=['','','','','','','','','','','','','','','',''];
  this.s_graveTouchOtherChar="ƐɛƖɩƆɔƎǝƲʋƱʊMmŊŋ";
  this.s_dkf007e=['','','','','','','','','','','','',''];
  this.s_dkt007e="~ãÃñÑõÕẽẼĩĨũŨ";
  this.s_dkf007eOther=['','','','','',''];
  this.s_dkf007eOtherOSX=['','','','','',''];
  this.s_dkt007eOther="ɛƐɔƆǝƎ";
  this.s_tildeTouchKey=['','','','','','','','','','','',''];
  this.s_tildeTouchChar="ãÃñÑõÕẽẼĩĨũŨ";
  this.s_tildeTouchOtherKey=['','','','','','','',''];
  this.s_tildeTouchOtherChar="ɛƐɩƖɔƆǝƎ";
  this.s_dkf00a8=['','','','','','','','','','','','',''];
  this.s_dkt00a8="¨äÄëËïÏöÖüÜÿŸ";
  this.s_diaeresisTouchKey=['','','','','','','','','','','',''];
  this.s_diaeresisTouchChar="äÄëËïÏöÖüÜÿŸ";
  this.s_dkf00af=['','','','','','','','','','',''];
  this.s_dkt00af="¯āĀēĒīĪōŌūŪ";
  this.s_dkf00afOther=['','','','','','','','','','','',''];
  this.s_dkf00afOtherOSX=['','','','','','','','','','','',''];
  this.s_dkt00afOther="ɛƐɩƖɔƆǝƎʋƲʊƱ";
  this.s_macronTouchKey=['','','','','','','','','',''];
  this.s_macronTouchChar="āĀēĒīĪōŌūŪ";
  this.s_macronTouchOtherKey=['','','','','','','','','','','',''];
  this.s_macronTouchOtherChar="ɛƐɩƖɔƆǝƎʋƲʊƱ";
  this.s_dkf02c7=['','','','','','','','','','',''];
  this.s_dkt02c7="ˇǎǍěĚǐǏǒǑǔǓ";
  this.s_dkf02c7Other=['','','','','','','','','','','',''];
  this.s_dkf02c7OtherOSX=['','','','','','','','','','','',''];
  this.s_dkt02c7Other="ɛƐɩƖɔƆǝƎʋƲʊƱ";
  this.s_caronTouchKey=['','','','','','','','','',''];
  this.s_caronTouchChar="ǎǍěĚǐǏǒǑǔǓ";
  this.s_caronTouchOtherKey=['','','','','','','','','','','',''];
  this.s_caronTouchOtherChar="ɛƐɩƖɔƆǝƎʋƲʊƱ";
  this.s_dkf007e_00b4_1=['','','',''];
  this.s_dkt007e_00b4_1="ṍṌṹṸ";
  this.s_dkf007e_00b4_2=['','','','','',''];
  this.s_dkt007e_00b4_2="ãÃẽẼĩĨ";
  this.s_dkf007e_00b4_3=['','','','','',''];
  this.s_dkf007e_00b4_3OSX=['','','','','',''];
  this.s_dkt007e_00b4_3="ɛƐɔƆǝƎ";
  this.s_tildeAcuteTouchKey=['','','',''];
  this.s_tildeAcuteTouchChar="ṍṌṹṸ";
  this.s_tildeAcuteTouch2Key=['','','','','',''];
  this.s_tildeAcuteTouch2Char="ãÃẽẼĩĨ";
  this.s_tildeAcuteTouchOtherKey=['','','','','',''];
  this.s_tildeAcuteTouchOtherChar="ɛƐɔƆǝƎ";
  this.s_dkf007e_0060_2=['','','','','','','','','',''];
  this.s_dkt007e_0060_2="ãÃẽẼĩĨõÕũŨ";
  this.s_dkf007e_0060_3=['','','','','',''];
  this.s_dkf007e_0060_3OSX=['','','','','',''];
  this.s_dkt007e_0060_3="ɛƐɔƆǝƎ";
  this.s_tildeGraveTouchKey=['','','','','','','','','',''];
  this.s_tildeGraveTouchChar="ãÃẽẼĩĨõÕũŨ";
  this.s_tildeGraveTouchOtherKey=['','','','','',''];
  this.s_tildeGraveTouchOtherChar="ɛƐɔƆǝƎ";
  this.s_graveDK=['',''];
  this.s_tildeDK=['',''];
  this.s_tildeDKOSX=['',''];
  this.s116="touch";
  this.s117="macosx";
  this.s118="touch";
  this.s119="macosx";
  this.s120="touch";
  this.s121="touch";
  this.s122="touch";
  this.s123="macosx";
  this.s124="touch";
  this.s125="touch";
  this.s126="touch";
  this.s127="touch";
  this.s128="touch";
  this.s129="touch";
  this.s130="macosx";
  this.s131="touch";
  this.s132="macosx";
  this.s133="touch";
  this.s134="macosx";
  this.s135="touch";
  this.s136="touch";
  this.s137="touch";
  this.s138="macosx";
  this.s139="touch";
  this.s140="macosx";
  this.s141="touch";
  this.s142="macosx";
  this.s143="touch";
  this.s144="touch";
  this.s145="touch";
  this.s146="macosx";
  this.s147="touch";
  this.s148="macosx";
  this.s149="touch";
  this.s150="macosx";
  this.s151="touch";
  this.s152="touch";
  this.s153="touch";
  this.s154="macosx";
  this.s155="touch";
  this.s156="touch";
  this.s157="touch";
  this.s158="touch";
  this.s159="touch";
  this.s160="touch";
  this.s161="macosx";
  this.s162="touch";
  this.s163="macosx";
  this.s164="touch";
  this.s165="macosx";
  this.s166="touch";
  this.s167="touch";
  this.s168="touch";
  this.s169="macosx";
  this.s170="touch";
  this.s171="macosx";
  this.s172="touch";
  this.s173="macosx";
  this.s174="touch";
  this.s175="touch";
  this.s176="touch";
  this.s177="macosx";
  this.s178="touch";
  this.s179="macosx";
  this.s180="touch";
  this.s181="macosx";
  this.s182="touch";
  this.s183="macosx";
  this.s184="touch";
  this.s185="macosx";
  this.s186="touch";
  this.s187="macosx";
  this.s188="touch";
  this.s189="touch";
  this.s190="touch";
  this.s191="touch";
  this.s192="macosx";
  this.s193="touch";
  this.s194="macosx";
  this.s195="touch";
  this.s196="macosx";
  this.s197="touch";
  this.s198="macosx";
  this.s199="touch";
  this.s200="macosx";
  this.s201="touch";
  this.s202="macosx";
  this.s203="touch";
  this.s204="touch";
  this.s205="touch";
  this.s206="touch";
  this.KVER="10.0.1113.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s176,t)) {   // Line 462
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s176,t)) {   // Line 462
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s176,t)) {   // Line 462
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s176,t)) {   // Line 462
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s176,t)) {   // Line 462
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s176,t)) {   // Line 462
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s177,t)) {   // Line 463
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s177,t)) {   // Line 463
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s177,t)) {   // Line 463
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s177,t)) {   // Line 463
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s177,t)) {   // Line 463
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s177,t)) {   // Line 463
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s178,t)) {   // Line 464
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s179,t)) {   // Line 465
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&!k.KIFS(31,this.s180,t)) {   // Line 466
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])&&k.KIFS(31,this.s181,t)) {   // Line 467
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s182,t)) {   // Line 470
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s182,t)) {   // Line 470
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s182,t)) {   // Line 470
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s182,t)) {   // Line 470
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s182,t)) {   // Line 470
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s182,t)) {   // Line 470
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s183,t)) {   // Line 471
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s183,t)) {   // Line 471
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s183,t)) {   // Line 471
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s183,t)) {   // Line 471
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s183,t)) {   // Line 471
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s183,t)) {   // Line 471
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s184,t)) {   // Line 472
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s185,t)) {   // Line 473
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&!k.KIFS(31,this.s186,t)) {   // Line 474
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])&&k.KIFS(31,this.s187,t)) {   // Line 475
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s191,t)) {   // Line 482
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s191,t)) {   // Line 482
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s191,t)) {   // Line 482
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s191,t)) {   // Line 482
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s191,t)) {   // Line 482
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s191,t)) {   // Line 482
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s192,t)) {   // Line 483
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s192,t)) {   // Line 483
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s192,t)) {   // Line 483
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s192,t)) {   // Line 483
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s192,t)) {   // Line 483
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s192,t)) {   // Line 483
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s193,t)) {   // Line 484
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s194,t)) {   // Line 485
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&!k.KIFS(31,this.s195,t)) {   // Line 486
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])&&k.KIFS(31,this.s196,t)) {   // Line 487
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s197,t)) {   // Line 489
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s197,t)) {   // Line 489
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s197,t)) {   // Line 489
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s197,t)) {   // Line 489
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s197,t)) {   // Line 489
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s197,t)) {   // Line 489
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s198,t)) {   // Line 490
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s198,t)) {   // Line 490
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s198,t)) {   // Line 490
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s198,t)) {   // Line 490
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s198,t)) {   // Line 490
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s198,t)) {   // Line 490
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s199,t)) {   // Line 491
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s200,t)) {   // Line 492
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&!k.KIFS(31,this.s201,t)) {   // Line 493
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])&&k.KIFS(31,this.s202,t)) {   // Line 494
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ŋ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s129,t)) {   // Line 393
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ŋ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ŋ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ŋ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s130,t)) {   // Line 394
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s131,t)) {   // Line 395
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s132,t)) {   // Line 396
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&!k.KIFS(31,this.s133,t)) {   // Line 397
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ́");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:0}])&&k.KIFS(31,this.s134,t)) {   // Line 398
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ́");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s137,t)) {   // Line 404
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s138,t)) {   // Line 405
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s139,t)) {   // Line 406
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s140,t)) {   // Line 407
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&!k.KIFS(31,this.s141,t)) {   // Line 408
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̂");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:1}])&&k.KIFS(31,this.s142,t)) {   // Line 409
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̂");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ŋ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"m̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"M̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s145,t)) {   // Line 415
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ŋ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ŋ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ŋ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"m̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"M̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s146,t)) {   // Line 416
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s147,t)) {   // Line 417
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s148,t)) {   // Line 418
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&!k.KIFS(31,this.s149,t)) {   // Line 419
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̀");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:2}])&&k.KIFS(31,this.s150,t)) {   // Line 420
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̀");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s153,t)) {   // Line 426
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s153,t)) {   // Line 426
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s153,t)) {   // Line 426
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s153,t)) {   // Line 426
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s153,t)) {   // Line 426
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s153,t)) {   // Line 426
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̃");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&k.KIFS(31,this.s154,t)) {   // Line 427
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̃");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:3}])&&k.KIFS(31,this.s154,t)) {   // Line 427
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̃");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:3}])&&k.KIFS(31,this.s154,t)) {   // Line 427
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̃");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&k.KIFS(31,this.s154,t)) {   // Line 427
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̃");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&k.KIFS(31,this.s154,t)) {   // Line 427
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̃");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&k.KIFS(31,this.s154,t)) {   // Line 427
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s155,t)) {   // Line 428
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:3}])&&!k.KIFS(31,this.s156,t)) {   // Line 429
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̃");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s160,t)) {   // Line 439
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s161,t)) {   // Line 440
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s162,t)) {   // Line 441
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s163,t)) {   // Line 442
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&!k.KIFS(31,this.s164,t)) {   // Line 443
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̄");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:5}])&&k.KIFS(31,this.s165,t)) {   // Line 444
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̄");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s168,t)) {   // Line 450
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʊ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɛ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɛ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɩ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʊ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ʋ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ʋ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɩ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǝ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s169,t)) {   // Line 451
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǝ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s170,t)) {   // Line 452
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s171,t)) {   // Line 453
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ɔ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&!k.KIFS(31,this.s172,t)) {   // Line 454
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̌");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'d',d:6}])&&k.KIFS(31,this.s173,t)) {   // Line 455
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ɔ̌");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_1 /* 0x31 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COMMA /* 0xBC */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_S /* 0x53 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_C /* 0x43 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_X /* 0x58 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_oE2 /* 0xE2 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_L /* 0x4C */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_M /* 0x4D */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_K /* 0x4B */)&&!k.KIFS(31,this.s116,t)) {   // Line 348
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_1 /* 0x31 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COMMA /* 0xBC */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_M /* 0x4D */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_C /* 0x43 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_X /* 0x58 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_oE2 /* 0xE2 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_L /* 0x4C */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_K /* 0x4B */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_S /* 0x53 */)&&k.KIFS(31,this.s117,t)) {   // Line 349
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_W /* 0x57 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʒ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_W /* 0x57 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʒ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_T /* 0x54 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɗ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_T /* 0x54 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɗ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Y /* 0x59 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ƴ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Y /* 0x59 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ƴ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_D /* 0x44 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɖ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_D /* 0x44 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɖ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_F /* 0x46 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ƒ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_F /* 0x46 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ƒ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_G /* 0x47 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɣ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_G /* 0x47 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɣ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_H /* 0x48 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ĥ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_N /* 0x4E */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ŋ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_N /* 0x4E */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ŋ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_B /* 0x42 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɓ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_B /* 0x42 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɓ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COLON /* 0xBA */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɲ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COLON /* 0xBA */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɲ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_H /* 0x48 */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ĥ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_J /* 0x4A */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɨ");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_J /* 0x4A */)&&!k.KIFS(31,this.s118,t)) {   // Line 354
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɨ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_H /* 0x48 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ĥ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_G /* 0x47 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɣ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_G /* 0x47 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɣ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_F /* 0x46 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ƒ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_F /* 0x46 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ƒ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_D /* 0x44 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɖ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_D /* 0x44 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɖ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_P /* 0x50 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_P /* 0x50 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_O /* 0x4F */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_I /* 0x49 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_I /* 0x49 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_U /* 0x55 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_U /* 0x55 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Y /* 0x59 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ƴ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Y /* 0x59 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ƴ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_T /* 0x54 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɗ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_T /* 0x54 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɗ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_R /* 0x52 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_R /* 0x52 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_W /* 0x57 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʒ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_W /* 0x57 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʒ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_COLON /* 0xBA */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɲ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_COLON /* 0xBA */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɲ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_V /* 0x56 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_V /* 0x56 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_B /* 0x42 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɓ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_B /* 0x42 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɓ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_N /* 0x4E */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ŋ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_N /* 0x4E */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ŋ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_J /* 0x4A */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɨ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_J /* 0x4A */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɨ");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_H /* 0x48 */)&&k.KIFS(31,this.s119,t)) {   // Line 355
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ĥ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x110)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɨ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x110)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɨ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10F)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ŋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10F)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ŋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10E)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɓ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10E)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɓ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10D)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10D)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10C)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɲ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɲ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10B)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ĥ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ĥ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10A)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɣ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɣ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʒ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x100)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x101)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x102)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɗ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ƴ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x103)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ƴ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x104)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x109)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ƒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ƒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x108)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɖ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɖ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x107)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x105)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x106)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x106)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)&&k.KIFS(31,this.s120,t)) {   // Line 356
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x111)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,",");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x112)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"‹");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x112)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"›");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x113)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"«");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x113)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"»");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x114)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"'");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x115)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\"");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x111)&&k.KIFS(31,this.s121,t)) {   // Line 363
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,".");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_EQUAL /* 0xBB */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"}");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_HYPHEN /* 0xBD */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"]");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_RBRKT /* 0xDD */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"¤");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_9 /* 0x39 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"^");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_8 /* 0x38 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\\");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_6 /* 0x36 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"|");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_5 /* 0x35 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"[");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_E /* 0x45 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"€");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_3 /* 0x33 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"#");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_0 /* 0x30 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"@");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_4 /* 0x34 */)&&!k.KIFS(31,this.s122,t)) {   // Line 364
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"{");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_E /* 0x45 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"€");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_0 /* 0x30 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"@");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_3 /* 0x33 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"#");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_4 /* 0x34 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"{");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_5 /* 0x35 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"[");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_6 /* 0x36 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"|");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_8 /* 0x38 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\\");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_9 /* 0x39 */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"^");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_RBRKT /* 0xDD */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"¤");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"]");
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_EQUAL /* 0xBB */)&&k.KIFS(31,this.s123,t)) {   // Line 365
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"}");
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKSLASH /* 0xDC */)&&!k.KIFS(31,this.s124,t)) {   // Line 371
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_QUOTE /* 0xDE */)&&!k.KIFS(31,this.s125,t)) {   // Line 377
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,2);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_7 /* 0x37 */)&&!k.KIFS(31,this.s125,t)) {   // Line 377
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,2);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_SLASH /* 0xBF */)&&!k.KIFS(31,this.s126,t)) {   // Line 380
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,3);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_2 /* 0x32 */)&&!k.KIFS(31,this.s126,t)) {   // Line 380
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,3);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_PERIOD /* 0xBE */)&&!k.KIFS(31,this.s127,t)) {   // Line 386
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,5);
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_LBRKT /* 0xDB */)&&!k.KIFS(31,this.s128,t)) {   // Line 389
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,6);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x116)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Á");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x116)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"á");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x117)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"É");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x117)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"é");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x118)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Í");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x118)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"í");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x119)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ó");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x119)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ó");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x11A)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ú");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11A)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ú");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11C)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ń");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x11C)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ń");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11B)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ḿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x11B)&&k.KIFS(31,this.s135,t)) {   // Line 399
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ḿ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11F)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11D)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x11E)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11E)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x11F)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x120)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x121)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x122)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x122)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x123)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x123)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x124)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ŋ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x124)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ŋ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x11D)&&k.KIFS(31,this.s136,t)) {   // Line 400
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x129)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Û");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x129)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"û");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x128)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ô");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x128)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ô");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x127)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Î");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x127)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"î");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x126)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ê");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x126)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ê");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x125)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Â");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x125)&&k.KIFS(31,this.s143,t)) {   // Line 410
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"â");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x12D)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̂");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x12F)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ̂");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x12F)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ̂");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x12A)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̂");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x12B)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ̂");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x12B)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ̂");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x12C)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̂");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x12C)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̂");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x12A)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̂");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x12D)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̂");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x12E)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ̂");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x12E)&&k.KIFS(31,this.s144,t)) {   // Line 411
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ̂");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x133)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ò");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x134)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ù");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x135)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x134)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ù");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x135)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x133)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ò");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x132)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ì");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x130)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"à");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x130)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"À");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x131)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"è");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x131)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"È");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x132)&&k.KIFS(31,this.s151,t)) {   // Line 421
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ì");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x138)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x13E)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ŋ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x13D)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"m̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x13D)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"M̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x13C)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x13C)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x13B)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x136)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x136)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x137)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x137)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x13E)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ŋ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x138)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x139)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x13A)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x13B)&&k.KIFS(31,this.s152,t)) {   // Line 422
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x142)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ẽ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x141)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Õ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x141)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"õ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x140)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ñ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x140)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ñ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x13F)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ã");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x142)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ẽ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x13F)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ã");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x143)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ĩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x143)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ĩ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x144)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ũ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x144)&&k.KIFS(31,this.s157,t)) {   // Line 430
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ũ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x146)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x145)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̃");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x145)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x146)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x147)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̃");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x147)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x148)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̃");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x148)&&k.KIFS(31,this.s158,t)) {   // Line 431
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̃");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x149)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ä");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x14E)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ÿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x149)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ä");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x14A)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ë");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x14E)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ÿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x14D)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ü");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x14D)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ü");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x14A)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ë");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x14B)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ï");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x14B)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ï");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x14C)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ö");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x14C)&&k.KIFS(31,this.s159,t)) {   // Line 435
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ö");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x153)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ū");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x153)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ū");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x151)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ī");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x152)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ō");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x152)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ō");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x150)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ē");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x150)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ē");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x14F)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ā");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x14F)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ā");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x151)&&k.KIFS(31,this.s166,t)) {   // Line 445
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ī");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x156)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̄");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x155)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ̄");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x155)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ̄");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x154)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̄");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x158)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ̄");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x159)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ̄");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x156)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̄");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x154)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̄");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x159)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ̄");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x157)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̄");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x158)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ̄");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x157)&&k.KIFS(31,this.s167,t)) {   // Line 446
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̄");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15C)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǐ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15B)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ě");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15B)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ě");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15A)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǎ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15C)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǐ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15E)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15E)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15D)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15D)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15A)&&k.KIFS(31,this.s174,t)) {   // Line 456
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǎ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x15F)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x160)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɩ̌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x160)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɩ̌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x161)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x162)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x162)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x163)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʋ̌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x163)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʋ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x164)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ʊ̌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x164)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ʊ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x15F)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x161)&&k.KIFS(31,this.s175,t)) {   // Line 457
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̌");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x166)&&k.KIFS(31,this.s188,t)) {   // Line 476
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ṹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x165)&&k.KIFS(31,this.s188,t)) {   // Line 476
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ṍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x165)&&k.KIFS(31,this.s188,t)) {   // Line 476
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ṍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x166)&&k.KIFS(31,this.s188,t)) {   // Line 476
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ṹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x167)&&k.KIFS(31,this.s189,t)) {   // Line 477
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ã́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x168)&&k.KIFS(31,this.s189,t)) {   // Line 477
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ẽ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x169)&&k.KIFS(31,this.s189,t)) {   // Line 477
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ĩ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x169)&&k.KIFS(31,this.s189,t)) {   // Line 477
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ĩ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x167)&&k.KIFS(31,this.s189,t)) {   // Line 477
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ã́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x168)&&k.KIFS(31,this.s189,t)) {   // Line 477
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ẽ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x16C)&&k.KIFS(31,this.s190,t)) {   // Line 478
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̃́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x16A)&&k.KIFS(31,this.s190,t)) {   // Line 478
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̃́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x16B)&&k.KIFS(31,this.s190,t)) {   // Line 478
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̃́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x16B)&&k.KIFS(31,this.s190,t)) {   // Line 478
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̃́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x16C)&&k.KIFS(31,this.s190,t)) {   // Line 478
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̃́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x16A)&&k.KIFS(31,this.s190,t)) {   // Line 478
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̃́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x16F)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ĩ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x16F)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ĩ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x16E)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ẽ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x16E)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ẽ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x16D)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ã̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x170)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"õ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x170)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Õ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x171)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ũ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x171)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ũ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x16D)&&k.KIFS(31,this.s203,t)) {   // Line 495
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ã̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x172)&&k.KIFS(31,this.s204,t)) {   // Line 496
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x173)&&k.KIFS(31,this.s204,t)) {   // Line 496
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x173)&&k.KIFS(31,this.s204,t)) {   // Line 496
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ɔ̃̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x174)&&k.KIFS(31,this.s204,t)) {   // Line 496
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x174)&&k.KIFS(31,this.s204,t)) {   // Line 496
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ǝ̃̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x172)&&k.KIFS(31,this.s204,t)) {   // Line 496
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ɛ̃̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x175)&&k.KIFS(31,this.s205,t)) {   // Line 499
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ç");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x175)&&k.KIFS(31,this.s206,t)) {   // Line 500
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Ç");
    }
    else if(k.KKM(e, modCodes.RCTRL | modCodes.VIRTUAL_KEY /* 0x4002 */, keyCodes.K_SPACE /* 0x20 */)) {   // Line 359
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t," ");
    }
    else if(k.KKM(e, modCodes.LCTRL | modCodes.VIRTUAL_KEY /* 0x4001 */, keyCodes.K_SPACE /* 0x20 */)) {   // Line 359
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t," ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_oE2 /* 0xE2 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"<");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_oE2 /* 0xE2 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,">");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"´");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"^");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"`");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"~");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"¨");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"¯");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ˇ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SPACE /* 0x20 */)) {   // Line 359
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t," ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {   // Line 359
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t," ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"1");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"%");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"3");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"4");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"5");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"7");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ù");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"9");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"0");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"8");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"+");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,";");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,")");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,":");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"!");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"à");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"&");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"é");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\"");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"'");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"(");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"-");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"è");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"_");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ç");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"M");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"m");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,".");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"=");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"/");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"§");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"2");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 461
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ã́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 469
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ã́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ã̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ã̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Â");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"À");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ã");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ä");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ā");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǎ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Q");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"B");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"C");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"D");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 461
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẽ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 469
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẽ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẽ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ẽ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"É");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ê");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"È");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ẽ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ë");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ē");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ě");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"E");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"F");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"G");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ĥ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"H");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 461
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĩ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 469
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĩ́");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĩ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ĩ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Í");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Î");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ì");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ĩ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ï");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ī");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǐ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"I");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"J");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"K");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"L");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ḿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ń");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ñ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"N");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 460
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 468
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṍ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Õ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Õ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ó");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ô");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ò");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Õ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ö");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ō");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǒ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"O");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"P");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Á");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"A");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"R");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"S");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"T");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 460
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 468
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ṹ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ũ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Ũ̀");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ú");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Û");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ù");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ũ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ü");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ū");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ǔ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"U");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"V");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Z");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"X");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"Ÿ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"Y");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"W");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {   // Line 374
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"*");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"$");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {   // Line 360
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"6");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"°");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"²");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 461
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ã́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 469
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ã́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ã̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ã̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"â");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"à");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ã");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ä");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ā");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǎ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"q");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"b");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"c");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"d");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 461
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẽ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 469
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẽ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẽ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ẽ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"é");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ê");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"è");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ẽ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ë");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ē");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ě");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"e");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"f");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"g");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ĥ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"h");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 461
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĩ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 469
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĩ́");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĩ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ĩ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"í");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"î");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ì");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ĩ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ï");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ī");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǐ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"i");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"j");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"k");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"l");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ḿ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,",");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ń");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ñ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"n");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 460
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 468
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṍ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"õ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"õ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ó");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ô");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ò");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"õ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ö");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ō");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"o");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"p");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"á");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"a");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"r");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"s");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"t");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:0}])) {   // Line 460
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:0},{t:'d',d:3}])) {   // Line 468
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ṹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:3},{t:'d',d:2}])) {   // Line 481
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ũ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,[{t:'d',d:2},{t:'d',d:3}])) {   // Line 488
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ũ̀");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 392
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ú");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:1}])) {   // Line 403
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"û");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:2}])) {   // Line 414
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ù");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:3}])) {   // Line 425
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ũ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ü");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:5}])) {   // Line 438
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ū");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'d',d:6}])) {   // Line 449
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ǔ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"u");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"v");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"z");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"x");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(1,t,[{t:'d',d:4}])) {   // Line 434
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ÿ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"y");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {   // Line 352
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"w");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {   // Line 383
      r=m=1;
      k.KDC(0,t);
      k.KDO(-1,t,4);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"µ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {   // Line 361
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"£");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {   // Line 347
      r=m=1;
      k.KDC(0,t);
    }
    return r;
  };
}
