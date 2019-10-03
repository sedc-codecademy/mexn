export class ServiceConfig
{
    public static HOST: string = 'http://localhost:3001';

    // REGISTER

    public static REGISTER = `${ServiceConfig.HOST}/auth/register`;

    // LOGIN

    public static LOGIN = `${ServiceConfig.HOST}/auth/login`;

   // FILES
    public static FILES = `${ServiceConfig.HOST}/files`;

    public static DOWNLOAD = `${ServiceConfig.FILES}/download`;
}