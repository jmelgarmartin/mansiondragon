export interface GenericApiResponse<ModelApiResponse> {
    data: ModelApiResponse[]
}

export interface GenericModelResponse {
    type: string
    id: string
    attributes: object
}