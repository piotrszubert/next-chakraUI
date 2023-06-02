export default function handler(req, res) {
    const { name, email, message } = req.body;
  
    console.log('Submitted data:', { name, email, message });

    const responseData = {
      submittedData: { name, email, message },
    };
  
    res.status(200).json(responseData);
  }
  