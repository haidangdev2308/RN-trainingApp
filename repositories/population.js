import axios from "axios"
//https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SERVER_NAME = 'datausa.io'
async function getPopulation({ drilldowns, measures }) {
    const urlGetPopulation = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`
    try {
        let result = []
        let responseData = await axios.get(urlGetPopulation)
        //response trả về là 1 mảng
        responseData.data.data.forEach((item) => {
            let myObject = {} //chuẩn hoá đối tượng từ api, để không có dấu cách trong key
            myObject.nationId = item['ID Nation']
            myObject.year = item['Year']
            myObject.population = item['Population']
            result.push(myObject)
        })
        return result
    } catch (error) {
        throw error
    }
}
//many other functions
export default {
    getPopulation,
}