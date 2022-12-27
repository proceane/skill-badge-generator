const methods = {
  listToMarkdown: (skillList, color, style, showLogo) => {
    let result = "";
    for (let key in skillList) {
      result += ("<img src=\"https://img.shields.io/badge/"
      + encodeURIComponent(skillList[key]['name'])
      + "-"
      + (color != 'FFFFFF' ? color : skillList[key]['color'])
      + "?style=" + style 
      + (showLogo ? "&logo=" + skillList[key]['logo'] + "&logoColor=white" : '')
      + "\">\n"
      );
    }
    
    if (result == '') {
      return null;
    }

    result += "<br>";
    return result
  }
}

export default methods.listToMarkdown;