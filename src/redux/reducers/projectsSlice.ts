import { RootState } from '../store';
import { contentfulGetData } from './../../api/index';
import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IProjectsItem {
    metadata: {
      tags: Array<any>
    }
    sys: {
      space: {
        sys: {
          type: string
          linkType: string
          id: string
        }
      }
      id: string
      type: string
      createdAt: string
      updatedAt: string
      environment: {
        sys: {
          id: string
          type: string
          linkType: string
        }
      }
      revision: number
      contentType: {
        sys: {
          type: string
          linkType: string
          id: string
        }
      }
      locale: string
    }
    fields: {
      title: string
      path: string
      description: string
      image: {
        metadata: {
          tags: Array<any>
        }
        sys: {
          space: {
            sys: {
              type: string
              linkType: string
              id: string
            }
          }
          id: string
          type: string
          createdAt: string
          updatedAt: string
          environment: {
            sys: {
              id: string
              type: string
              linkType: string
            }
          }
          revision: number
          locale: string
        }
        fields: {
          title: string
          description: string
          file: {
            url: string
            details: {
              size: number
              image: {
                width: number
                height: number
              }
            }
            fileName: string
            contentType: string
          }
        }
      }
      isAvailable: boolean
      tags: Array<string>
      demoUrl: string
      githubUrl: string
    }
  }

type initStateType = {
    projectsData: IProjectsItem[]
}

const initState: initStateType = {
    projectsData: []
}

const projectsSlice = createSlice({
    name: "tasklist",
    initialState: initState,
    reducers: {
        setProjectsData: (state, action: PayloadAction<IProjectsItem[]>) => {
            state.projectsData = action.payload
        }
    }
})

export const contentfulGetProjectsDataThunk = () => async (dispatch: Dispatch, getState: () => RootState) => {    
    contentfulGetData().then(data => {
        dispatch(setProjectsData(data))
    })
}

// Extract the action creators object and the reducer
const { actions, reducer } = projectsSlice
// Extract and export each action creator by name
export const { setProjectsData } = actions
// Export the reducer, either as a default or named export
export default reducer