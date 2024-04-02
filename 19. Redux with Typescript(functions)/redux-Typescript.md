## Due to some breaking changes in the recent release of React v18, the versions shown in the project setup will no longer work. We will need to install the latest versions of Redux, React Redux, and @types/react-redux:

npm install --save-exact react-redux redux @types/react-redux redux-thunk axios

## API to search packages:

https://registry.npmjs.org/-/v1/search?text=react


## Small Update for Try / Catch Block
In the upcoming lecture, we will be adding our searchRepositories action. You will likely see a TS error in the catch block that says Object is of type 'unknown'

There are two ways that you can resolve this for now:

Option #1

    } catch (err: any) {
      
Option #2

...
 
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }


## In the upcoming lecture, we will be adding some code to our RepositoriesList component. You will likely see a big error such as this:

Argument of type '(dispatch: Dispatch<Action>) => Promise<void>' is not assignable to parameter of type 'AnyAction'

This is caused by some changes to the React Redux library in the latest versions. The code that is throwing the error will not be used at all and will be refactored in the very next video. So, you are ok to use as any to suppress the TS error for this lecture:

dispatch(actionCreators.searchRepositories(term) as any);