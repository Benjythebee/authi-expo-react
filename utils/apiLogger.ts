interface LogData {
    level: 'info' | 'warn' | 'error' | 'debug';
    message: string;
    timestamp?: string;
    data?: any;
}

export class ApiLogger {
    private static readonly LOG_ENDPOINT = 'http://localhost:3000/log';

    static async log(logData: LogData): Promise<void> {
        try {
            const payload = {
                ...logData,
                timestamp: logData.timestamp || new Date().toISOString()
            };

            await fetch(this.LOG_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.error('Failed to send log to API:', error);
        }
    }

    static info(message: string, data?: any): Promise<void> {
        return this.log({ level: 'info', message, data });
    }

    static warn(message: string, data?: any): Promise<void> {
        return this.log({ level: 'warn', message, data });
    }

    static error(message: string, data?: any): Promise<void> {
        return this.log({ level: 'error', message, data });
    }

    static debug(message: string, data?: any): Promise<void> {
        return this.log({ level: 'debug', message, data });
    }
}