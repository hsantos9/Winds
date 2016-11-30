import * as SuggestedFeedsActions from 'actions/SuggestedFeeds'

function SuggestedFeeds(state = [], action) {
    switch (action.type) {
        case SuggestedFeedsActions.LOAD:
            if (action.response) return [...action.response]
            return state
        case SuggestedFeedsActions.FOLLOW:
            if (action.response) return [...action]
            return state
        case SuggestedFeedsActions.REMOVE:
            if (action.response) return [...action]
            return state
    }

    return state
}

export default SuggestedFeeds
