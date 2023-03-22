export class ResponseModel {
    isOwner: boolean;

    constructor(
        public success?: boolean,
        public message?: string
    ){}

}