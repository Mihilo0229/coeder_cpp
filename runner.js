const expected = "Hello World\n";  // 模範出力

document.getElementById("run").addEventListener("click", async () => {
  const code = document.getElementById("code").value;

  // ここで WebAssembly ベースの C++ 実行関数を呼ぶ（例：runCpp(code)）
  // runCpp は「標準出力の文字列」を返す想定
  const output = await runCpp(code); 

  document.getElementById("output").textContent = output;

  // 採点（トリムするかどうかなどは好みで調整）
  if (output.trim() === expected.trim()) {
    document.getElementById("result").textContent = "✅ 正解！";
  } else {
    document.getElementById("result").textContent = "❌ 不正解。出力を確認してみてください。";
  }
});
