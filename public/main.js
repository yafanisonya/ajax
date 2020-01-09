let n = 1;
getDB.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', `/page${n + 1}.json`)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response)
        array.forEach(item => {
          const li = document.createElement("li")
          li.textContent = item.id
          xxx.appendChild(li)
        });
        n += 1
      }
    }
  }
  request.send();
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/index.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response)
        myName.textContent = object.name
        console.log(object)
      }
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/index.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      }
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/index2.html');
  request.onload = () => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => {
    console.log('error')
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/main2.js');
  request.onload = () => {
    const script = document.createElement('script') //创建script标签
    script.innerHTML = request.response             //填写script标签内容
    document.body.appendChild(script)                //将标签查到body
  }
  request.onerror = () => {
    console.log('error')
  }
  request.send()
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', "/style.css");
  // request.onload = () => {
  //   console.log(request.response)
  //   const style = document.createElement('style') //创建style标签
  //   style.innerHTML = request.response            //填写style内容
  //   document.head.appendChild(style)              //将标签插到head
  // };
  // request.onerror = () => {
  //   console.log('error')
  // };
  request.onreadystatechange = () => {
    if (request.readyState === 4) {   //下载完成，但是不知道是成功还是失败
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      }
    }
  }
  request.send();
}
