export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed"
    });
  }

  const APP_ID = "59875cb5-157f-4642-a66d-2ccc9c4952a0";
  const ACCESS_KEY = "V2-u6zGD-M58mn-Age8M-IYgBS-5bL7B-L1kpV-q6e3k-r2wat";

  const body = {
    Action: "Add",
    Properties: {},
    Rows: [
      req.body
    ]
  };

  try {

    const response = await fetch(
  `https://api.appsheet.com/api/v2/apps/${APP_ID}/tables/Jobs/Action`,
  {
    method: "POST",
    headers: {
      "ApplicationAccessKey": ACCESS_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }
);
    const result = await response.text();

console.log("AppSheet Response:", result);

return res.status(200).json({
  status: response.status,
  body: result
});

  } catch (err) {

    return res.status(500).json({
      success: false,
      error: err.message
    });
    }
}
