module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,93,219,75,142,27,219,153,133,209,185,220,150,203,176,81,34,153,124,53,73,238,189,39,225,199,44,170,85,168,185,87,26,206,48,176,212,8,225,63,41,138,113,190,8,65,192,194,129,254,246,199,159,254,248,203,31,255,245,125,253,249,251,250,235,247,245,223,223,215,223,190,175,191,255,253,251,151,127,124,95,255,252,190,254,247,251,250,191,127,253,240,127,206,191,78,183,159,225,114,62,134,203,49,124,253,12,247,28,67,127,134,199,241,147,199,241,147,252,58,134,211,49,28,95,152,227,11,115,124,97,174,199,112,220,61,247,99,120,28,195,243,24,94,199,240,62,134,207,207,208,159,123,157,126,157,143,225,117,12,239,99,248,28,67,142,161,199,176,159,225,244,235,24,142,47,60,29,95,120,186,28,195,245,24,158,199,112,220,235,116,220,235,116,220,235,116,220,235,252,117,12,143,99,56,62,115,254,207,103,142,109,92,142,109,92,142,109,28,239,226,116,188,139,211,229,216,198,229,118,12,247,99,248,247,45,214,159,207,124,15,183,99,184,31,195,241,153,235,243,24,94,199,240,62,134,207,207,112,59,29,195,229,24,126,254,248,126,253,103,120,30,195,235,24,114,12,251,25,46,239,99,248,28,195,241,153,75,127,134,227,238,187,254,251,183,242,184,92,191,127,253,252,250,229,242,228,242,236,242,226,242,203,229,213,229,205,229,221,229,195,229,211,229,203,229,219,229,199,229,111,69,117,57,150,39,123,79,246,158,236,61,217,123,178,247,100,239,201,222,147,189,39,123,79,246,158,236,61,217,123,178,247,100,239,201,222,147,189,103,123,207,246,158,237,61,219,123,182,247,108,239,217,222,179,189,103,123,207,246,158,237,61,219,123,182,247,108,239,217,222,179,189,23,123,47,246,94,236,189,216,123,177,247,98,239,197,222,139,189,23,123,47,246,94,236,189,216,123,177,247,98,239,197,222,139,189,95,246,126,217,251,101,239,151,189,95,246,126,217,251,101,239,151,189,95,246,126,217,251,101,239,151,189,95,246,126,217,251,101,239,151,189,87,123,175,246,94,237,189,218,123,181,247,106,224,213,192,171,129,87,3,175,6,94,13,188,26,248,219,63,185,87,3,175,6,222,12,188,25,120,51,240,102,224,205,192,155,47,244,102,239,205,222,155,189,55,123,111,246,222,236,189,217,123,179,247,102,239,205,222,187,189,119,123,239,246,222,237,189,219,123,183,247,110,239,221,222,187,189,119,123,239,246,222,237,189,219,123,183,247,110,239,221,222,135,189,15,123,31,246,62,236,125,216,251,176,247,97,239,195,222,135,189,15,123,31,246,62,236,125,216,251,176,247,97,239,195,222,167,189,79,123,159,246,62,237,125,218,251,180,247,105,239,211,222,167,189,79,123,159,246,62,237,125,218,251,52,240,105,224,203,132,151,155,124,185,201,151,219,120,185,141,151,219,120,185,141,151,219,120,185,141,183,207,249,237,115,126,187,201,183,207,249,237,115,126,155,240,54,225,237,115,126,251,156,223,6,190,45,122,251,55,231,109,209,219,162,143,69,31,19,62,38,124,220,243,199,61,127,220,243,199,61,127,220,243,199,151,242,49,225,227,75,249,88,244,177,232,99,81,44,138,239,40,6,198,192,248,142,98,111,236,141,189,177,55,246,198,222,216,27,123,99,111,236,141,189,181,183,246,214,222,218,91,123,107,111,237,173,189,181,183,246,214,222,218,91,123,107,111,237,173,189,179,119,246,206,222,217,59,123,103,239,236,157,189,179,119,246,206,222,217,59,123,103,239,236,29,189,17,143,17,143,17,143,17,143,17,143,17,143,81,139,81,139,81,139,81,139,209,131,209,131,209,131,209,131,209,131,209,131,209,131,209,131,17,128,17,128,17,128,17,128,17,128,17,128,17,128,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,81,124,145,120,145,120,145,120,145,120,209,116,209,116,209,116,209,116,209,116,17,113,209,101,209,101,209,101,209,101,249,250,109,147,190,5,93,22,33,22,33,22,33,150,171,143,93,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,69,151,229,105,175,76,139,76,203,203,222,151,189,34,46,47,123,95,246,74,188,72,188,188,236,125,217,43,0,35,0,35,0,35,0,243,178,87,15,70,15,70,15,70,15,70,15,70,15,70,15,70,15,70,15,70,15,70,15,70,15,230,109,175,60,204,219,94,181,24,181,24,181,24,181,152,143,189,226,49,226,49,31,123,181,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,180,100,181,100,181,100,181,100,181,100,181,100,181,100,61,136,172,180,172,180,172,180,172,180,172,7,145,245,32,178,194,179,194,179,194,179,194,179,194,179,194,179,194,179,194,179,30,68,86,135,86,135,86,135,86,135,86,135,86,135,86,135,214,131,200,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,202,210,122,16,89,149,90,149,90,149,90,149,90,15,34,43,90,43,90,43,90,43,90,43,90,235,65,100,53,108,61,136,172,7,145,245,32,178,130,183,130,183,130,183,130,183,130,183,130,183,130,183,30,68,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,255,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,195,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,180,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,165,86,150,86,150,86,150,86,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,150,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,135,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,120,78,105,78,105,78,105,78,105,78,105,78,105,78,105,78,105,78,105,78,105,78,105,78,105,78,105,254,246,159,14,118,253,45,208,23,170,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,167,52,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,119,255,45,208,23,42,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,39,45,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,167,37,231,89,234,60,75,157,103,169,243,44,117,58,116,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,194,115,30,158,78,135,78,120,78,120,78,120,78,120,78,120,78,120,78,60,78,60,78,60,78,60,78,60,78,60,78,60,78,60,78,60,78,60,78,60,78,60,78,60,206,19,207,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,105,201,121,226,57,105,57,105,57,105,185,111,90,254,227,255,1,47,99,148,52,67,60,0,0])))