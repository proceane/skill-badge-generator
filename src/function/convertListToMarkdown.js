const methods = {
  listToMarkdown: (skillList) => {
    let result = "";
    for (let key in skillList) {
      result += ("<img src=\"https://img.shields.io/badge/"
      + encodeURIComponent(skillList[key]['name'])
      + "-"
      + skillList[key]['color']
      + "?style=flat-square&logo="
      + skillList[key]['logo']
      + "&logoColor=white\">\n");
    }
    result += "<br>";
    return result
  }
}

export default methods.listToMarkdown;