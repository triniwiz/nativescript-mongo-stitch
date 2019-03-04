
interface bcon_append_ctx_frame_t {
	i: number;
	is_array: boolean;
	bson: bson_t;
}
declare var bcon_append_ctx_frame_t: interop.StructType<bcon_append_ctx_frame_t>;

declare function bcon_append_ctx_init(ctx: interop.Pointer | interop.Reference<bcon_append_ctx_t>): void;

interface bcon_append_ctx_t {
	stack: interop.Reference<bcon_append_ctx_frame_t>;
	n: number;
}
declare var bcon_append_ctx_t: interop.StructType<bcon_append_ctx_t>;

declare const enum bcon_type_t {

	BCON_TYPE_UTF8 = 0,

	BCON_TYPE_DOUBLE = 1,

	BCON_TYPE_DOCUMENT = 2,

	BCON_TYPE_ARRAY = 3,

	BCON_TYPE_BIN = 4,

	BCON_TYPE_UNDEFINED = 5,

	BCON_TYPE_OID = 6,

	BCON_TYPE_BOOL = 7,

	BCON_TYPE_DATE_TIME = 8,

	BCON_TYPE_NULL = 9,

	BCON_TYPE_REGEX = 10,

	BCON_TYPE_DBPOINTER = 11,

	BCON_TYPE_CODE = 12,

	BCON_TYPE_SYMBOL = 13,

	BCON_TYPE_CODEWSCOPE = 14,

	BCON_TYPE_INT32 = 15,

	BCON_TYPE_TIMESTAMP = 16,

	BCON_TYPE_INT64 = 17,

	BCON_TYPE_DECIMAL128 = 18,

	BCON_TYPE_MAXKEY = 19,

	BCON_TYPE_MINKEY = 20,

	BCON_TYPE_BCON = 21,

	BCON_TYPE_ARRAY_START = 22,

	BCON_TYPE_ARRAY_END = 23,

	BCON_TYPE_DOC_START = 24,

	BCON_TYPE_DOC_END = 25,

	BCON_TYPE_END = 26,

	BCON_TYPE_RAW = 27,

	BCON_TYPE_SKIP = 28,

	BCON_TYPE_ITER = 29,

	BCON_TYPE_ERROR = 30
}

declare function bson_append_array(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, array: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_array_begin(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, child: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_array_end(bson: interop.Pointer | interop.Reference<bson_t>, child: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_binary(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, subtype: bson_subtype_t, binary: string, length: number): boolean;

declare function bson_append_bool(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: boolean): boolean;

declare function bson_append_code(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, javascript: string): boolean;

declare function bson_append_code_with_scope(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, javascript: string, scope: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_date_time(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: number): boolean;

declare function bson_append_dbpointer(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, collection: string, oid: interop.Pointer | interop.Reference<bson_oid_t>): boolean;

declare function bson_append_decimal128(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: interop.Pointer | interop.Reference<bson_decimal128_t>): boolean;

declare function bson_append_document(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_document_begin(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, child: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_document_end(bson: interop.Pointer | interop.Reference<bson_t>, child: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_append_double(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: number): boolean;

declare function bson_append_int32(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: number): boolean;

declare function bson_append_int64(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: number): boolean;

declare function bson_append_maxkey(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number): boolean;

declare function bson_append_minkey(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number): boolean;

declare function bson_append_now_utc(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number): boolean;

declare function bson_append_null(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number): boolean;

declare function bson_append_oid(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, oid: interop.Pointer | interop.Reference<bson_oid_t>): boolean;

declare function bson_append_regex(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, regex: string, options: string): boolean;

declare function bson_append_regex_w_len(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, regex: string, regex_length: number, options: string): boolean;

declare function bson_append_symbol(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: string, length: number): boolean;

declare function bson_append_time_t(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: number): boolean;

declare function bson_append_timestamp(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, timestamp: number, increment: number): boolean;

declare function bson_append_timeval(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: interop.Pointer | interop.Reference<timeval>): boolean;

declare function bson_append_undefined(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number): boolean;

declare function bson_append_utf8(bson: interop.Pointer | interop.Reference<bson_t>, key: string, key_length: number, value: string, length: number): boolean;

declare function bson_array_as_json(bson: interop.Pointer | interop.Reference<bson_t>, length: interop.Pointer | interop.Reference<number>): string;

declare function bson_as_canonical_extended_json(bson: interop.Pointer | interop.Reference<bson_t>, length: interop.Pointer | interop.Reference<number>): string;

declare function bson_as_json(bson: interop.Pointer | interop.Reference<bson_t>, length: interop.Pointer | interop.Reference<number>): string;

declare function bson_as_relaxed_extended_json(bson: interop.Pointer | interop.Reference<bson_t>, length: interop.Pointer | interop.Reference<number>): string;

declare function bson_ascii_strtoll(str: string, endptr: interop.Pointer | interop.Reference<string>, base: number): number;

declare function bson_bcon_magic(): string;

declare function bson_bcone_magic(): string;

declare function bson_check_version(required_major: number, required_minor: number, required_micro: number): boolean;

declare function bson_compare(bson: interop.Pointer | interop.Reference<bson_t>, other: interop.Pointer | interop.Reference<bson_t>): number;

declare function bson_concat(dst: interop.Pointer | interop.Reference<bson_t>, src: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_context_destroy(context: interop.Pointer | interop.Reference<any>): void;

declare const enum bson_context_flags_t {

	BSON_CONTEXT_NONE = 0,

	BSON_CONTEXT_THREAD_SAFE = 1,

	BSON_CONTEXT_DISABLE_HOST_CACHE = 2,

	BSON_CONTEXT_DISABLE_PID_CACHE = 4
}

declare function bson_context_get_default(): interop.Pointer | interop.Reference<any>;

declare function bson_context_new(flags: bson_context_flags_t): interop.Pointer | interop.Reference<any>;

declare function bson_copy(bson: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<bson_t>;

declare function bson_copy_to(src: interop.Pointer | interop.Reference<bson_t>, dst: interop.Pointer | interop.Reference<bson_t>): void;

declare function bson_count_keys(bson: interop.Pointer | interop.Reference<bson_t>): number;

declare function bson_decimal128_from_string(string: string, dec: interop.Pointer | interop.Reference<bson_decimal128_t>): boolean;

declare function bson_decimal128_from_string_w_len(string: string, len: number, dec: interop.Pointer | interop.Reference<bson_decimal128_t>): boolean;

interface bson_decimal128_t {
	low: number;
	high: number;
}
declare var bson_decimal128_t: interop.StructType<bson_decimal128_t>;

declare function bson_decimal128_to_string(dec: interop.Pointer | interop.Reference<bson_decimal128_t>, str: string): void;

declare function bson_destroy(bson: interop.Pointer | interop.Reference<bson_t>): void;

declare function bson_destroy_with_steal(bson: interop.Pointer | interop.Reference<bson_t>, steal: boolean, length: interop.Pointer | interop.Reference<number>): string;

declare function bson_equal(bson: interop.Pointer | interop.Reference<bson_t>, other: interop.Pointer | interop.Reference<bson_t>): boolean;

interface bson_error_t {
	domain: number;
	code: number;
	message: interop.Reference<number>;
}
declare var bson_error_t: interop.StructType<bson_error_t>;

declare function bson_free(mem: interop.Pointer | interop.Reference<any>): void;

declare function bson_get_data(bson: interop.Pointer | interop.Reference<bson_t>): string;

declare function bson_get_major_version(): number;

declare function bson_get_micro_version(): number;

declare function bson_get_minor_version(): number;

declare function bson_get_monotonic_time(): number;

declare function bson_get_version(): string;

declare function bson_gettimeofday(tv: interop.Pointer | interop.Reference<timeval>): number;

declare function bson_has_field(bson: interop.Pointer | interop.Reference<bson_t>, key: string): boolean;

declare function bson_init(b: interop.Pointer | interop.Reference<bson_t>): void;

declare function bson_init_from_json(bson: interop.Pointer | interop.Reference<bson_t>, data: string, len: number, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function bson_init_static(b: interop.Pointer | interop.Reference<bson_t>, data: string, length: number): boolean;

declare function bson_json_data_reader_ingest(reader: interop.Pointer | interop.Reference<any>, data: string, len: number): void;

declare function bson_json_data_reader_new(allow_multiple: boolean, size: number): interop.Pointer | interop.Reference<any>;

declare const enum bson_json_error_code_t {

	BSON_JSON_ERROR_READ_CORRUPT_JS = 1,

	BSON_JSON_ERROR_READ_INVALID_PARAM = 2,

	BSON_JSON_ERROR_READ_CB_FAILURE = 3
}

declare function bson_json_reader_destroy(reader: interop.Pointer | interop.Reference<any>): void;

declare function bson_json_reader_new(data: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: string, p3: number) => number>, dcb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>, allow_multiple: boolean, buf_size: number): interop.Pointer | interop.Reference<any>;

declare function bson_json_reader_new_from_fd(fd: number, close_on_destroy: boolean): interop.Pointer | interop.Reference<any>;

declare function bson_json_reader_new_from_file(filename: string, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function bson_json_reader_read(reader: interop.Pointer | interop.Reference<any>, bson: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): number;

declare function bson_malloc(num_bytes: number): interop.Pointer | interop.Reference<any>;

declare function bson_malloc0(num_bytes: number): interop.Pointer | interop.Reference<any>;

declare function bson_md5_append(pms: interop.Pointer | interop.Reference<bson_md5_t>, data: string, nbytes: number): void;

declare function bson_md5_finish(pms: interop.Pointer | interop.Reference<bson_md5_t>, digest: interop.Reference<number>): void;

declare function bson_md5_init(pms: interop.Pointer | interop.Reference<bson_md5_t>): void;

interface bson_md5_t {
	count: interop.Reference<number>;
	abcd: interop.Reference<number>;
	buf: interop.Reference<number>;
}
declare var bson_md5_t: interop.StructType<bson_md5_t>;

declare function bson_mem_restore_vtable(): void;

declare function bson_mem_set_vtable(vtable: interop.Pointer | interop.Reference<bson_mem_vtable_t>): void;

interface bson_mem_vtable_t {
	malloc: interop.FunctionReference<(p1: number) => interop.Pointer | interop.Reference<any>>;
	calloc: interop.FunctionReference<(p1: number, p2: number) => interop.Pointer | interop.Reference<any>>;
	realloc: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: number) => interop.Pointer | interop.Reference<any>>;
	free: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>;
	padding: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var bson_mem_vtable_t: interop.StructType<bson_mem_vtable_t>;

declare function bson_new(): interop.Pointer | interop.Reference<bson_t>;

declare function bson_new_from_buffer(buf: interop.Pointer | interop.Reference<string>, buf_len: interop.Pointer | interop.Reference<number>, realloc_func: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: number, p3: interop.Pointer | interop.Reference<any>) => interop.Pointer | interop.Reference<any>>, realloc_func_ctx: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function bson_new_from_data(data: string, length: number): interop.Pointer | interop.Reference<bson_t>;

declare function bson_new_from_json(data: string, len: number, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<bson_t>;

declare function bson_oid_compare(oid1: interop.Pointer | interop.Reference<bson_oid_t>, oid2: interop.Pointer | interop.Reference<bson_oid_t>): number;

declare function bson_oid_copy(src: interop.Pointer | interop.Reference<bson_oid_t>, dst: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function bson_oid_equal(oid1: interop.Pointer | interop.Reference<bson_oid_t>, oid2: interop.Pointer | interop.Reference<bson_oid_t>): boolean;

declare function bson_oid_get_time_t(oid: interop.Pointer | interop.Reference<bson_oid_t>): number;

declare function bson_oid_hash(oid: interop.Pointer | interop.Reference<bson_oid_t>): number;

declare function bson_oid_init(oid: interop.Pointer | interop.Reference<bson_oid_t>, context: interop.Pointer | interop.Reference<any>): void;

declare function bson_oid_init_from_data(oid: interop.Pointer | interop.Reference<bson_oid_t>, data: string): void;

declare function bson_oid_init_from_string(oid: interop.Pointer | interop.Reference<bson_oid_t>, str: string): void;

declare function bson_oid_init_sequence(oid: interop.Pointer | interop.Reference<bson_oid_t>, context: interop.Pointer | interop.Reference<any>): void;

declare function bson_oid_is_valid(str: string, length: number): boolean;

interface bson_oid_t {
	bytes: interop.Reference<number>;
}
declare var bson_oid_t: interop.StructType<bson_oid_t>;

declare function bson_oid_to_string(oid: interop.Pointer | interop.Reference<bson_oid_t>, str: interop.Reference<number>): void;

declare function bson_reader_destroy(reader: interop.Pointer | interop.Reference<bson_reader_t>): void;

declare function bson_reader_new_from_data(data: string, length: number): interop.Pointer | interop.Reference<bson_reader_t>;

declare function bson_reader_new_from_fd(fd: number, close_on_destroy: boolean): interop.Pointer | interop.Reference<bson_reader_t>;

declare function bson_reader_new_from_file(path: string, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<bson_reader_t>;

declare function bson_reader_new_from_handle(handle: interop.Pointer | interop.Reference<any>, rf: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: interop.Pointer | interop.Reference<any>, p3: number) => number>, df: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): interop.Pointer | interop.Reference<bson_reader_t>;

declare function bson_reader_read(reader: interop.Pointer | interop.Reference<bson_reader_t>, reached_eof: interop.Pointer | interop.Reference<boolean>): interop.Pointer | interop.Reference<bson_t>;

declare function bson_reader_reset(reader: interop.Pointer | interop.Reference<bson_reader_t>): void;

declare function bson_reader_set_destroy_func(reader: interop.Pointer | interop.Reference<bson_reader_t>, func: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function bson_reader_set_read_func(reader: interop.Pointer | interop.Reference<bson_reader_t>, func: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: interop.Pointer | interop.Reference<any>, p3: number) => number>): void;

interface bson_reader_t {
	type: number;
}
declare var bson_reader_t: interop.StructType<bson_reader_t>;

declare function bson_reader_tell(reader: interop.Pointer | interop.Reference<bson_reader_t>): number;

declare function bson_realloc(mem: interop.Pointer | interop.Reference<any>, num_bytes: number): interop.Pointer | interop.Reference<any>;

declare function bson_realloc_ctx(mem: interop.Pointer | interop.Reference<any>, num_bytes: number, ctx: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function bson_reinit(b: interop.Pointer | interop.Reference<bson_t>): void;

declare function bson_reserve_buffer(bson: interop.Pointer | interop.Reference<bson_t>, size: number): string;

declare function bson_sized_new(size: number): interop.Pointer | interop.Reference<bson_t>;

declare function bson_steal(dst: interop.Pointer | interop.Reference<bson_t>, src: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function bson_strcasecmp(s1: string, s2: string): number;

declare function bson_strdup(str: string): string;

declare function bson_strerror_r(err_code: number, buf: string, buflen: number): string;

declare function bson_strfreev(strv: interop.Pointer | interop.Reference<string>): void;

declare function bson_string_append(string: interop.Pointer | interop.Reference<bson_string_t>, str: string): void;

declare function bson_string_append_c(string: interop.Pointer | interop.Reference<bson_string_t>, str: number): void;

declare function bson_string_append_unichar(string: interop.Pointer | interop.Reference<bson_string_t>, unichar: number): void;

declare function bson_string_free(string: interop.Pointer | interop.Reference<bson_string_t>, free_segment: boolean): string;

declare function bson_string_new(str: string): interop.Pointer | interop.Reference<bson_string_t>;

interface bson_string_t {
	str: string;
	len: number;
	alloc: number;
}
declare var bson_string_t: interop.StructType<bson_string_t>;

declare function bson_string_truncate(string: interop.Pointer | interop.Reference<bson_string_t>, len: number): void;

declare function bson_strncpy(dst: string, src: string, size: number): void;

declare function bson_strndup(str: string, n_bytes: number): string;

declare function bson_strnlen(s: string, maxlen: number): number;

declare const enum bson_subtype_t {

	BSON_SUBTYPE_BINARY = 0,

	BSON_SUBTYPE_FUNCTION = 1,

	BSON_SUBTYPE_BINARY_DEPRECATED = 2,

	BSON_SUBTYPE_UUID_DEPRECATED = 3,

	BSON_SUBTYPE_UUID = 4,

	BSON_SUBTYPE_MD5 = 5,

	BSON_SUBTYPE_USER = 128
}

interface bson_t {
	flags: number;
	len: number;
	padding: interop.Reference<number>;
}
declare var bson_t: interop.StructType<bson_t>;

declare const enum bson_type_t {

	BSON_TYPE_EOD = 0,

	BSON_TYPE_DOUBLE = 1,

	BSON_TYPE_UTF8 = 2,

	BSON_TYPE_DOCUMENT = 3,

	BSON_TYPE_ARRAY = 4,

	BSON_TYPE_BINARY = 5,

	BSON_TYPE_UNDEFINED = 6,

	BSON_TYPE_OID = 7,

	BSON_TYPE_BOOL = 8,

	BSON_TYPE_DATE_TIME = 9,

	BSON_TYPE_NULL = 10,

	BSON_TYPE_REGEX = 11,

	BSON_TYPE_DBPOINTER = 12,

	BSON_TYPE_CODE = 13,

	BSON_TYPE_SYMBOL = 14,

	BSON_TYPE_CODEWSCOPE = 15,

	BSON_TYPE_INT32 = 16,

	BSON_TYPE_TIMESTAMP = 17,

	BSON_TYPE_INT64 = 18,

	BSON_TYPE_DECIMAL128 = 19,

	BSON_TYPE_MAXKEY = 127,

	BSON_TYPE_MINKEY = 255
}

declare function bson_uint32_to_string(value: number, strptr: interop.Pointer | interop.Reference<string>, str: string, size: number): number;

declare function bson_utf8_escape_for_json(utf8: string, utf8_len: number): string;

declare function bson_utf8_from_unichar(unichar: number, utf8: interop.Reference<number>, len: interop.Pointer | interop.Reference<number>): void;

declare function bson_utf8_get_char(utf8: string): number;

declare function bson_utf8_next_char(utf8: string): string;

declare function bson_utf8_validate(utf8: string, utf8_len: number, allow_null: boolean): boolean;

declare function bson_validate(bson: interop.Pointer | interop.Reference<bson_t>, flags: bson_validate_flags_t, offset: interop.Pointer | interop.Reference<number>): boolean;

declare const enum bson_validate_flags_t {

	BSON_VALIDATE_NONE = 0,

	BSON_VALIDATE_UTF8 = 1,

	BSON_VALIDATE_DOLLAR_KEYS = 2,

	BSON_VALIDATE_DOT_KEYS = 4,

	BSON_VALIDATE_UTF8_ALLOW_NULL = 8,

	BSON_VALIDATE_EMPTY_KEYS = 16
}

declare function bson_validate_with_error(bson: interop.Pointer | interop.Reference<bson_t>, flags: bson_validate_flags_t, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function bson_writer_begin(writer: interop.Pointer | interop.Reference<any>, bson: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>): boolean;

declare function bson_writer_destroy(writer: interop.Pointer | interop.Reference<any>): void;

declare function bson_writer_end(writer: interop.Pointer | interop.Reference<any>): void;

declare function bson_writer_get_length(writer: interop.Pointer | interop.Reference<any>): number;

declare function bson_writer_new(buf: interop.Pointer | interop.Reference<string>, buflen: interop.Pointer | interop.Reference<number>, offset: number, realloc_func: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: number, p3: interop.Pointer | interop.Reference<any>) => interop.Pointer | interop.Reference<any>>, realloc_func_ctx: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function bson_writer_rollback(writer: interop.Pointer | interop.Reference<any>): void;

declare function bson_zero_free(mem: interop.Pointer | interop.Reference<any>, size: number): void;
