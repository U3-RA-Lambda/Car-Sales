export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeFeature = item => {
    return {
      type: 'REMOVE_ITEM',
      payload: item
    }
} 