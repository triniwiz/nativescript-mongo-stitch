
declare function mongo_embedded_v1_client_create(instance: interop.Pointer | interop.Reference<any>, status: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongo_embedded_v1_client_destroy(client: interop.Pointer | interop.Reference<any>, status: interop.Pointer | interop.Reference<any>): number;

declare function mongo_embedded_v1_client_invoke(client: interop.Pointer | interop.Reference<any>, input: interop.Pointer | interop.Reference<any>, input_size: number, output: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>, output_size: interop.Pointer | interop.Reference<number>, status: interop.Pointer | interop.Reference<any>): number;

declare const enum mongo_embedded_v1_error {

	MONGO_EMBEDDED_V1_ERROR_IN_REPORTING_ERROR = -2,

	MONGO_EMBEDDED_V1_ERROR_UNKNOWN = -1,

	MONGO_EMBEDDED_V1_SUCCESS = 0,

	MONGO_EMBEDDED_V1_ERROR_ENOMEM = 1,

	MONGO_EMBEDDED_V1_ERROR_EXCEPTION = 2,

	MONGO_EMBEDDED_V1_ERROR_LIBRARY_ALREADY_INITIALIZED = 3,

	MONGO_EMBEDDED_V1_ERROR_LIBRARY_NOT_INITIALIZED = 4,

	MONGO_EMBEDDED_V1_ERROR_INVALID_LIB_HANDLE = 5,

	MONGO_EMBEDDED_V1_ERROR_DB_INITIALIZATION_FAILED = 6,

	MONGO_EMBEDDED_V1_ERROR_INVALID_DB_HANDLE = 7,

	MONGO_EMBEDDED_V1_ERROR_HAS_DB_HANDLES_OPEN = 8,

	MONGO_EMBEDDED_V1_ERROR_DB_MAX_OPEN = 9,

	MONGO_EMBEDDED_V1_ERROR_DB_CLIENTS_OPEN = 10,

	MONGO_EMBEDDED_V1_ERROR_INVALID_CLIENT_HANDLE = 11,

	MONGO_EMBEDDED_V1_ERROR_REENTRANCY_NOT_ALLOWED = 12
}

interface mongo_embedded_v1_init_params {
	yaml_config: string;
	log_flags: number;
	log_callback: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: string, p3: string, p4: string, p5: number) => void>;
	log_user_data: interop.Pointer | interop.Reference<any>;
}
declare var mongo_embedded_v1_init_params: interop.StructType<mongo_embedded_v1_init_params>;

declare function mongo_embedded_v1_instance_create(lib: interop.Pointer | interop.Reference<any>, yaml_config: string, status: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongo_embedded_v1_instance_destroy(instance: interop.Pointer | interop.Reference<any>, status: interop.Pointer | interop.Reference<any>): number;

declare function mongo_embedded_v1_lib_fini(lib: interop.Pointer | interop.Reference<any>, status: interop.Pointer | interop.Reference<any>): number;

declare function mongo_embedded_v1_lib_init(params: interop.Pointer | interop.Reference<mongo_embedded_v1_init_params>, status: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare const enum mongo_embedded_v1_log_flags {

	MONGO_EMBEDDED_V1_LOG_NONE = 0,

	MONGO_EMBEDDED_V1_LOG_STDOUT = 1,

	MONGO_EMBEDDED_V1_LOG_CALLBACK = 4
}

declare function mongo_embedded_v1_status_create(): interop.Pointer | interop.Reference<any>;

declare function mongo_embedded_v1_status_destroy(status: interop.Pointer | interop.Reference<any>): void;

declare function mongo_embedded_v1_status_get_code(status: interop.Pointer | interop.Reference<any>): number;

declare function mongo_embedded_v1_status_get_error(status: interop.Pointer | interop.Reference<any>): number;

declare function mongo_embedded_v1_status_get_explanation(status: interop.Pointer | interop.Reference<any>): string;
