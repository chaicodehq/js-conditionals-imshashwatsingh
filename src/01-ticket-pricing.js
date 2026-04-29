/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */


export function getTicketPrice(age, isWeekend) {

    // Validate inputs
    if (typeof age !== "number" || typeof isWeekend !== "boolean") {
        return -1;
    }

    if (age < 0 || Number.isNaN(age)) {
        return -1;
    }

    let totalCharge = 0;

    // Base price by age
    if (age <= 12) {
        totalCharge = 8;
    } 
    else if (age <= 17) {
        totalCharge = 12;
    } 
    else if (age <= 59) {
        totalCharge = 15;
    } 
    else {
        totalCharge = 10;
    }

    // Weekend surcharge
    if (isWeekend) {
        totalCharge += 3;
    }

    return totalCharge;
}
