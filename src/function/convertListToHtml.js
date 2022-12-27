const methods = {
  listToHtml: (skillList, color, style, showLogo) => {
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
    return result
  }
}

export default methods.listToHtml;