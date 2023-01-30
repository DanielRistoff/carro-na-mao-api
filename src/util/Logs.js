module.exports = {
    logInfo(arq, operation, func , obj) {
        const objJson = (typeof obj === 'object' && obj !== null) ? JSON.stringify(obj) : obj;
        console.log(`[${arq}] - [${operation}] - [${func}] - ${objJson}`);
    }
};