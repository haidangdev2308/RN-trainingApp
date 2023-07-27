import moment from "moment"

export const convertDateTimeToString = (dateOfBirth) => {
    return moment(dateOfBirth).format('DD-MM-YYYY')
}