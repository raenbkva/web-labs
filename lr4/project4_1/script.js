let textUrl = 'http://example.example/example/example.example?param1=value1&param2=value2 760873uhyu f5ti76ygs76etf iyhgf7924/*-***/*-fkh https://www.example.example'
let resultUrl = textUrl.match(/\bhttps*:[/]{2}[/a-z.]+[a-zA-z/.?0-9=&]+\b/g);
console.log(resultUrl);

let textEmail = ';jic76634g 9f70hf nam++e@domen.ru name@domen.ru kjhuf 987y87f g65rfbh'
let resultEmail = textEmail.match(/\b\w+[a-z0-9._-]*\w+@[a-z]+.[a-z]+\b/g);
console.log(resultEmail);
