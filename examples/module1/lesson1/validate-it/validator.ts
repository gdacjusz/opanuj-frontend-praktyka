
const successMessage = 'Valid';
const invalidMessage_emptyOrNonInteger = 'Invalid - empty or non integer';
const invalidMessage_notInRange = 'Invalid number';

export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMethod = (input: string) => boolean;

const isEven = (): NumericValidationMethod => (input: number) => input % 2 === 0;
const isGreaterThan = (min: number): NumericValidationMethod => (input: number) => input > min;
const isLessThan = (max: number): NumericValidationMethod => (input: number) => input < max;

export function isValidInteger(value: string): boolean {
    return !isNaN(Number(value)) && Number.isInteger(Number(value));
}

const validators: NumericValidationMethod[] = [
    isEven(),
    isGreaterThan(0), 
    isLessThan(100)];

export function validate(value: string): string {
    console.log(value);
    if (value) {
        if(!isValidInteger(value)) {
            return invalidMessage_emptyOrNonInteger;
        }
    if(validators.every(validator => validator(Number(value)))) {
        return successMessage;
    }else{
        return invalidMessage_notInRange;
        }
    }
    return invalidMessage_emptyOrNonInteger;
}