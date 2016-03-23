declare module "nativescript-intl" {
    interface DateTimeFormatOptions {
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
        hour12?: boolean;
    }
    
    interface DateTimeFormat {
        format(date?: Date | number): string;
    }
    
    interface NumberFormatOptions {
        style?: string;
        currency?: string;
        currencyDisplay?: string;
        useGrouping?: boolean;
        minimumIntegerDigits?: number;
        minimumFractionDigits?: number;
        maximumFractionDigits?: number;
    }
    
    interface NumberFormat {
        format(value: number): string;
    }
}