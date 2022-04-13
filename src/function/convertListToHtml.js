const methods = {
  listToHtml: (skillList) => {
    let result = "";
    for (let key in skillList) {
      result += ("<img src=\"https://img.shields.io/badge/"
      + encodeURIComponent(skillList[key]['skill'])
      + "-"
      + skillList[key]['color']
      + "?style=flat-square&logo="
      + skillList[key]['logo']
      + "&logoColor=white\">\n");
    }
    return result
  }
}

export default methods.listToHtml;