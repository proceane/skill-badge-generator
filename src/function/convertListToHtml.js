const methods = {
  listToHtml: (skillList) => {
    let result = "";
    for (let key in skillList) {
      result += ("<img src=\"https://img.shields.io/badge/"
      + skillList[key]['name']
      + "-"
      + skillList[key]['color']
      + "?style=flat-square&logo="
      + skillList[key]['name']
      + "&logoColor=white\">\n");
    }
    return result
  }
}

export default methods.listToHtml;