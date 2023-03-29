import pretty from "pretty";

export function generateHtml(code) {
  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমার স্কেচ</title>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>
</head>
<body>
  <style>
    html, body {
      height: 100%;
    }
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <script defer>
    let sketch = function (p) {${code}};
    new p5(sketch);
  </script>
</body>
</html>
  `;
  try {
    return pretty(html);
  } catch (_) {
    return html;
  }
}
