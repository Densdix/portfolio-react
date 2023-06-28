import * as contentful from 'contentful'
import { IProjectsItem } from '../redux/reducers/projectsSlice'

const client = contentful.createClient({
    space: 'xydgwmyjcp3b',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'CiuXEGVek-Gteyf1kaCvYa3t8USWHpIa61bXooAN1xc'
})

export const contentfulGetData = async () => {
    return client.getEntries()
        .then((response) => {
            return response.items as IProjectsItem[]
        })
}