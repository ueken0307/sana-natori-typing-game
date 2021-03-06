const table = {
  'あ':['a'],
  'い':['i'],
  'う':['u','wu','whu'],
  'え':['e'],
  'お':['o'],
  
  'か':['ka','ca'],
  'き':['ki'],
  'く':['ku','cu','qu'],
  'け':['ke'],
  'こ':['ko','co'],
  
  'さ':['sa'],
  'し':['si','shi','ci'],
  'す':['su'],
  'せ':['se','ce'],
  'そ':['so'],
  
  'た':['ta'],
  'ち':['ti','chi'],
  'つ':['tu','tsu'],
  'て':['te'],
  'と':['to'],
  
  'な':['na'],
  'に':['ni'],
  'ぬ':['nu'],
  'ね':['ne'],
  'の':['no'],
  
  'は':['ha'],
  'ひ':['hi'],
  'ふ':['hu','fu'],
  'へ':['he'],
  'ほ':['ho'],
  
  'ま':['ma'],
  'み':['mi'],
  'む':['mu'],
  'め':['me'],
  'も':['mo'],
  
  'や':['ya'],
  'ゆ':['yu'],
  'よ':['yo'],
  
  'ら':['ra'],
  'り':['ri'],
  'る':['ru'],
  'れ':['re'],
  'ろ':['ro'],
  
  'わ':['wa'],
  'を':['wo'],
  'ん':['nn','xn'],
  
  //-------------------------------
  
  'ぁ':['la','xa'],
  'ぃ':['li','xi','lyi','xyi'],
  'ぅ':['lu','xu'],
  'ぇ':['le','xe','lye','xye'],
  'ぉ':['lo','xo'],
  
  'ヵ':['lka','xka'],
  'ヶ':['lke','xke'],
  
  'っ':['ltu','xtu','ltsu'],
  
  'ゃ':['lya','xya'],
  'ゅ':['lyu','xyu'],
  'ょ':['lyo','xyo'],
  
  'ゎ':['lwa','xwa'],
  
  //-------------------------------
  
  'ゔ':['vu'],
  
  'が':['ga'],
  'ぎ':['gi'],
  'ぐ':['gu'],
  'げ':['ge'],
  'ご':['go'],
  
  'ざ':['za'],
  'じ':['zi','ji'],
  'ず':['zu'],
  'ぜ':['ze'],
  'ぞ':['zo'],
  
  'だ':['da'],
  'ぢ':['di'],
  'づ':['du'],
  'で':['de'],
  'ど':['do'],
  
  'ば':['ba'],
  'び':['bi'],
  'ぶ':['bu'],
  'べ':['be'],
  'ぼ':['bo'],
  
  'ぱ':['pa'],
  'ぴ':['pi'],
  'ぷ':['pu'],
  'ぺ':['pe'],
  'ぽ':['po'],
  
  //-------------------------------
  
  'うぁ':['wha'],
  'うぃ':['whi','wi'],
  'うぇ':['whe','we'],
  'うぉ':['who'],
  'いぇ':['ye'],
  
  'きゃ':['kya'],
  'きぃ':['kyi'],
  'きゅ':['kyu'],
  'きぇ':['kye'],
  'きょ':['kyo'],
  'くぁ':['qa','kwa'],
  'くぃ':['qi'],
  'くぇ':['qe'],
  'くぉ':['qo'],
  'ぎゃ':['gya'],
  'ぎぃ':['gyi'],
  'ぎゅ':['gyu'],
  'ぎぇ':['gye'],
  'ぎょ':['gyo'],
  'ぐぁ':['gwa'],
  'ぐぃ':['gwi'],
  'ぐぅ':['gwu'],
  'ぐぇ':['gwe'],
  'ぐぉ':['gwo'],
  
  'しゃ':['sya','sha'],
  'しぃ':['syi'],
  'しゅ':['syu','shu'],
  'しぇ':['sye','she'],
  'しょ':['syo','sho'],
  'じゃ':['zya','ja','jya'],
  'じぃ':['zyi','jyi'],
  'じゅ':['zyu','ju','jyu'],
  'じぇ':['zye','je','jye'],
  'じょ':['zyo','jo','jyo'],
  
  'ちゃ':['tya','cya','cha'],
  'ちぃ':['tyi','cyi'],
  'ちゅ':['tyu','cyu','chu'],
  'ちぇ':['tye','cye','che'],
  'ちょ':['tyo','cyo','cho'],
  'つぁ':['tsa'],
  'つぃ':['tsi'],
  'つぇ':['tse'],
  'つぉ':['tso'],
  'てゃ':['tha'],
  'てぃ':['thi'],
  'てゅ':['thu'],
  'てぇ':['the'],
  'てょ':['tho'],
  'とぁ':['twa'],
  'とぃ':['twi'],
  'とぅ':['twu'],
  'とぇ':['twe'],
  'とぉ':['two'],
  'ぢゃ':['dya'],
  'ぢぃ':['dyi'],
  'ぢゅ':['dyu'],
  'ぢぇ':['dye'],
  'ぢょ':['dyo'],
  'でゃ':['dha'],
  'でぃ':['dhi'],
  'でゅ':['dhu'],
  'でぇ':['dhe'],
  'でょ':['dho'],
  'どぁ':['dwa'],
  'どぃ':['dwi'],
  'どぅ':['dwu'],
  'どぇ':['dwe'],
  'どぉ':['dwo'],
  
  'にゃ':['nya'],
  'にぃ':['nyi'],
  'にゅ':['nyu'],
  'にぇ':['nye'],
  'にょ':['nyo'],
  
  'ひゃ':['hya'],
  'ひぃ':['hyi'],
  'ひゅ':['hyu'],
  'ひぇ':['hye'],
  'ひょ':['hyo'],
  'ふぁ':['fa'],
  'ふぃ':['fi'],
  'ふぇ':['fe'],
  'ふぉ':['fo'],
  'ふゃ':['fya'],
  'ふゅ':['fyu'],
  'ふょ':['fyo'],
  'びゃ':['bya'],
  'びぃ':['byi'],
  'びゅ':['byu'],
  'びぇ':['bye'],
  'びょ':['byo'],
  'ゔぁ':['va'],
  'ゔぃ':['vi'],
  'ゔぇ':['ve'],
  'ゔぉ':['vo'],
  'ゔゃ':['vya'],
  'ゔぃ':['vyi'],
  'ゔゅ':['vyu'],
  'ゔぇ':['vye'],
  'ゔょ':['vyo'],
  'ぴゃ':['pya'],
  'ぴぃ':['pyi'],
  'ぴゅ':['pyu'],
  'ぴぇ':['pye'],
  'ぴょ':['pyo'],
  
  'みゃ':['mya'],
  'みぃ':['myi'],
  'みゅ':['myu'],
  'みぇ':['mye'],
  'みょ':['myo'],
  
  'りゃ':['rya'],
  'りぃ':['ryi'],
  'りゅ':['ryu'],
  'りぇ':['rye'],
  'りょ':['ryo'],
  
  //-------------------------------
  
  '!':['!'],
  '！':['!'],
  '?':['?'],
  '？':['?'],
  '(':['('],
  '（':['('],
  ')':[')'],
  '）':[')'],
  '/':['/'],
  '／':['/'],
  '.':['.'],
  '。':['.'],
  ',':[','],
  '、':[','],
  'ー':['-'],
  '-':['-'],
  '~':['~'],
  '～':['~'],
  '"':['"'],
  '”':['"'],
  "'":["'"],
  "’":["'"],
  ' ':[' '],
  '　':[' '],
  '&':['&'],
  '＆':['&'],
  
  'a':['a'],
  'b':['b'],
  'c':['c'],
  'd':['d'],
  'e':['e'],
  'f':['f'],
  'g':['g'],
  'h':['h'],
  'i':['i'],
  'j':['j'],
  'k':['k'],
  'l':['l'],
  'm':['m'],
  'n':['n'],
  'o':['o'],
  'p':['p'],
  'q':['q'],
  'r':['r'],
  's':['s'],
  't':['t'],
  'u':['u'],
  'v':['v'],
  'w':['w'],
  'x':['x'],
  'y':['y'],
  'z':['z'],
  
  'A':['A'],
  'B':['B'],
  'C':['C'],
  'D':['D'],
  'E':['E'],
  'F':['F'],
  'G':['G'],
  'H':['H'],
  'I':['I'],
  'J':['J'],
  'K':['K'],
  'L':['L'],
  'M':['M'],
  'N':['N'],
  'O':['O'],
  'P':['P'],
  'Q':['Q'],
  'R':['R'],
  'S':['S'],
  'T':['T'],
  'U':['U'],
  'V':['V'],
  'W':['W'],
  'X':['X'],
  'Y':['Y'],
  'Z':['Z'],
  
  '1':['1'],
  '2':['2'],
  '3':['3'],
  '4':['4'],
  '5':['5'],
  '6':['6'],
  '7':['7'],
  '8':['8'],
  '9':['9'],
  '0':['0']
};
