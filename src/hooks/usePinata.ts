import axios from "axios"

export const usePinata = () => {
  const upload = async (file: any) => {
    const API_KEY = process.env.REACT_APP_PINATA_KEY
    const API_SECRET = process.env.REACT_APP_PINATA_SECRET

    // initialize the form data
    const formData: any = new FormData()

    // append the file form data to
    formData.append("file", file)
    // the endpoint needed to upload the file
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

    const response = await axios.post(url, formData, {
      maxContentLength: 999999,
      headers: {
        "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        pinata_api_key: API_KEY!,
        pinata_secret_api_key: API_SECRET!,
      },
    })
    return response.data.IpfsHash
  }

  const json = async (data: any) => {
    const API_KEY = process.env.REACT_APP_PINATA_KEY
    const API_SECRET = process.env.REACT_APP_PINATA_SECRET

    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
    const response = await axios.post(url, data, {
      maxContentLength: 999999,
      headers: {
        pinata_api_key: API_KEY!,
        pinata_secret_api_key: API_SECRET!,
      },
    })
    return response.data.IpfsHash
  }

  const unbox = async (hash: string) => {
    const { data } = await axios.get(`https://cloudflare-ipfs.com/ipfs/${hash}`)
    return data
  }
  return { upload, json, unbox }
}
