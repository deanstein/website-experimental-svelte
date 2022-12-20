export class ObjectUtils {

    static validateProp = function(object, topLevelProp, prop) {
        if (!object[topLevelProp]) throw new Error(`${topLevelProp} doesn't exist!`);
        if (!object[topLevelProp][prop]) throw new Error(`${prop} doesn't exist!`);
        return true;
    }

    static updateProp = function(object, topLevelProp, prop, value) {
        if (this.validateProp(object, topLevelProp, prop)) {
        object[topLevelProp][prop].set(value);
        }
    }

    static readProp(object, topLevelProp, prop) {
        if (this.validateProp(topLevelProp, prop)) {
            let result;
            object[topLevelProp][prop].subscribe(value => {
            result = value;
        })

        return result;
        }
    }

    // static updatePropRecursive = (settings) => {
    //     // Settings is something like that
    //     settings: [
    //        { prop, value }
    //        { prop, value}
    //     ]
     
    //     Object.keys(state).map(key => {
    //       if(typeof state[key] === 'object') {
    //          //call the same method recursive
    //       }
          
    //       // Check if the prop exists in the settings
    //       if (settings.find(item => item.prop === key)) {
    //        // update the prop with the properly value
    //       }
    //     })
    //  }
}