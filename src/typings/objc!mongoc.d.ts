
interface _mongoc_gridfs_file_opt_t {
	md5: string;
	filename: string;
	content_type: string;
	aliases: interop.Pointer | interop.Reference<bson_t>;
	metadata: interop.Pointer | interop.Reference<bson_t>;
	chunk_size: number;
}
declare var _mongoc_gridfs_file_opt_t: interop.StructType<_mongoc_gridfs_file_opt_t>;

interface _mongoc_host_list_t {
	next: interop.Pointer | interop.Reference<_mongoc_host_list_t>;
	host: interop.Reference<number>;
	host_and_port: interop.Reference<number>;
	port: number;
	family: number;
	padding: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var _mongoc_host_list_t: interop.StructType<_mongoc_host_list_t>;

interface _mongoc_stream_t {
	type: number;
	destroy: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => void>;
	close: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => number>;
	flush: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => number>;
	writev: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>, p2: interop.Pointer | interop.Reference<iovec>, p3: number, p4: number) => number>;
	readv: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>, p2: interop.Pointer | interop.Reference<iovec>, p3: number, p4: number, p5: number) => number>;
	setsockopt: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>, p2: number, p3: number, p4: interop.Pointer | interop.Reference<any>, p5: number) => number>;
	get_base_stream: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => interop.Pointer | interop.Reference<_mongoc_stream_t>>;
	check_closed: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => boolean>;
	poll: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<mongoc_stream_poll_t>, p2: number, p3: number) => number>;
	failed: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => void>;
	timed_out: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<_mongoc_stream_t>) => boolean>;
	padding: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var _mongoc_stream_t: interop.StructType<_mongoc_stream_t>;

declare function mongoc_apm_callbacks_destroy(callbacks: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_apm_callbacks_new(): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_command_failed_get_command_name(event: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_apm_command_failed_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_command_failed_get_duration(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_failed_get_error(event: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): void;

declare function mongoc_apm_command_failed_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_command_failed_get_operation_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_failed_get_reply(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_apm_command_failed_get_request_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_failed_get_server_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_started_get_command(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_apm_command_started_get_command_name(event: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_apm_command_started_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_command_started_get_database_name(event: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_apm_command_started_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_command_started_get_operation_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_started_get_request_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_started_get_server_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_succeeded_get_command_name(event: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_apm_command_succeeded_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_command_succeeded_get_duration(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_succeeded_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_command_succeeded_get_operation_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_succeeded_get_reply(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_apm_command_succeeded_get_request_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_command_succeeded_get_server_id(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_server_changed_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_changed_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_server_changed_get_new_description(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_changed_get_previous_description(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_changed_get_topology_id(event: interop.Pointer | interop.Reference<any>, topology_id: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function mongoc_apm_server_closed_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_closed_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_server_closed_get_topology_id(event: interop.Pointer | interop.Reference<any>, topology_id: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function mongoc_apm_server_heartbeat_failed_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_heartbeat_failed_get_duration(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_server_heartbeat_failed_get_error(event: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): void;

declare function mongoc_apm_server_heartbeat_failed_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_server_heartbeat_started_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_heartbeat_started_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_server_heartbeat_succeeded_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_heartbeat_succeeded_get_duration(event: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_apm_server_heartbeat_succeeded_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_server_heartbeat_succeeded_get_reply(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_apm_server_opening_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_server_opening_get_host(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_apm_server_opening_get_topology_id(event: interop.Pointer | interop.Reference<any>, topology_id: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function mongoc_apm_set_command_failed_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_command_started_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_command_succeeded_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_server_changed_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_server_closed_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_server_heartbeat_failed_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_server_heartbeat_started_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_server_heartbeat_succeeded_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_server_opening_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_topology_changed_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_topology_closed_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_set_topology_opening_cb(callbacks: interop.Pointer | interop.Reference<any>, cb: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => void>): void;

declare function mongoc_apm_topology_changed_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_topology_changed_get_new_description(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_topology_changed_get_previous_description(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_topology_changed_get_topology_id(event: interop.Pointer | interop.Reference<any>, topology_id: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function mongoc_apm_topology_closed_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_topology_closed_get_topology_id(event: interop.Pointer | interop.Reference<any>, topology_id: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function mongoc_apm_topology_opening_get_context(event: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_apm_topology_opening_get_topology_id(event: interop.Pointer | interop.Reference<any>, topology_id: interop.Pointer | interop.Reference<bson_oid_t>): void;

declare function mongoc_bulk_operation_delete(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_bulk_operation_delete_one(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_bulk_operation_destroy(bulk: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_bulk_operation_execute(bulk: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): number;

declare function mongoc_bulk_operation_get_hint(bulk: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_bulk_operation_get_write_concern(bulk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_bulk_operation_insert(bulk: interop.Pointer | interop.Reference<any>, document: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_bulk_operation_insert_with_opts(bulk: interop.Pointer | interop.Reference<any>, document: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_bulk_operation_new(ordered: boolean): interop.Pointer | interop.Reference<any>;

declare function mongoc_bulk_operation_remove(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_bulk_operation_remove_many_with_opts(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_bulk_operation_remove_one(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_bulk_operation_remove_one_with_opts(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_bulk_operation_replace_one(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, document: interop.Pointer | interop.Reference<bson_t>, upsert: boolean): void;

declare function mongoc_bulk_operation_replace_one_with_opts(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, document: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_bulk_operation_set_bypass_document_validation(bulk: interop.Pointer | interop.Reference<any>, bypass: boolean): void;

declare function mongoc_bulk_operation_set_client(bulk: interop.Pointer | interop.Reference<any>, client: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_bulk_operation_set_client_session(bulk: interop.Pointer | interop.Reference<any>, client_session: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_bulk_operation_set_collection(bulk: interop.Pointer | interop.Reference<any>, collection: string): void;

declare function mongoc_bulk_operation_set_database(bulk: interop.Pointer | interop.Reference<any>, database: string): void;

declare function mongoc_bulk_operation_set_hint(bulk: interop.Pointer | interop.Reference<any>, server_id: number): void;

declare function mongoc_bulk_operation_set_write_concern(bulk: interop.Pointer | interop.Reference<any>, write_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_bulk_operation_update(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, document: interop.Pointer | interop.Reference<bson_t>, upsert: boolean): void;

declare function mongoc_bulk_operation_update_many_with_opts(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, document: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_bulk_operation_update_one(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, document: interop.Pointer | interop.Reference<bson_t>, upsert: boolean): void;

declare function mongoc_bulk_operation_update_one_with_opts(bulk: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, document: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_change_stream_destroy(p1: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_change_stream_error_document(p1: interop.Pointer | interop.Reference<any>, p2: interop.Pointer | interop.Reference<bson_error_t>, p3: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>): boolean;

declare function mongoc_change_stream_next(p1: interop.Pointer | interop.Reference<any>, p2: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>): boolean;

declare function mongoc_check_version(required_major: number, required_minor: number, required_micro: number): boolean;

declare function mongoc_cleanup(): void;

declare function mongoc_client_command(client: interop.Pointer | interop.Reference<any>, db_name: string, flags: mongoc_query_flags_t, skip: number, limit: number, batch_size: number, query: interop.Pointer | interop.Reference<bson_t>, fields: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_command_simple(client: interop.Pointer | interop.Reference<any>, db_name: string, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_command_simple_with_server_id(client: interop.Pointer | interop.Reference<any>, db_name: string, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, server_id: number, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_command_with_opts(client: interop.Pointer | interop.Reference<any>, db_name: string, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_destroy(client: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_find_databases(client: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_find_databases_with_opts(client: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_collection(client: interop.Pointer | interop.Reference<any>, db: string, collection: string): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_database(client: interop.Pointer | interop.Reference<any>, name: string): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_database_names(client: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<string>;

declare function mongoc_client_get_database_names_with_opts(client: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<string>;

declare function mongoc_client_get_default_database(client: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_gridfs(client: interop.Pointer | interop.Reference<any>, db: string, prefix: string, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_max_bson_size(client: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_client_get_max_message_size(client: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_client_get_read_concern(client: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_read_prefs(client: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_server_description(client: interop.Pointer | interop.Reference<any>, server_id: number): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_server_descriptions(client: interop.Pointer | interop.Reference<any>, n: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>;

declare function mongoc_client_get_server_status(client: interop.Pointer | interop.Reference<any>, read_prefs: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_get_uri(client: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_get_write_concern(client: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_kill_cursor(client: interop.Pointer | interop.Reference<any>, cursor_id: number): void;

declare function mongoc_client_new(uri_string: string): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_new_from_uri(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_pool_destroy(pool: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_pool_max_size(pool: interop.Pointer | interop.Reference<any>, max_pool_size: number): void;

declare function mongoc_client_pool_min_size(pool: interop.Pointer | interop.Reference<any>, min_pool_size: number): void;

declare function mongoc_client_pool_new(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_pool_pop(pool: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_pool_push(pool: interop.Pointer | interop.Reference<any>, client: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_pool_set_apm_callbacks(pool: interop.Pointer | interop.Reference<any>, callbacks: interop.Pointer | interop.Reference<any>, context: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_client_pool_set_appname(pool: interop.Pointer | interop.Reference<any>, appname: string): boolean;

declare function mongoc_client_pool_set_error_api(pool: interop.Pointer | interop.Reference<any>, version: number): boolean;

declare function mongoc_client_pool_try_pop(pool: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_read_command_with_opts(client: interop.Pointer | interop.Reference<any>, db_name: string, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_read_write_command_with_opts(client: interop.Pointer | interop.Reference<any>, db_name: string, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_select_server(client: interop.Pointer | interop.Reference<any>, for_writes: boolean, prefs: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_session_abort_transaction(session: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_session_advance_cluster_time(session: interop.Pointer | interop.Reference<any>, cluster_time: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_client_session_advance_operation_time(session: interop.Pointer | interop.Reference<any>, timestamp: number, increment: number): void;

declare function mongoc_client_session_append(client_session: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_session_commit_transaction(session: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_session_destroy(session: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_session_get_client(session: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_session_get_cluster_time(session: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_client_session_get_lsid(session: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_client_session_get_operation_time(session: interop.Pointer | interop.Reference<any>, timestamp: interop.Pointer | interop.Reference<number>, increment: interop.Pointer | interop.Reference<number>): void;

declare function mongoc_client_session_get_opts(session: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_session_in_transaction(session: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_client_session_start_transaction(session: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_client_set_apm_callbacks(client: interop.Pointer | interop.Reference<any>, callbacks: interop.Pointer | interop.Reference<any>, context: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_client_set_appname(client: interop.Pointer | interop.Reference<any>, appname: string): boolean;

declare function mongoc_client_set_error_api(client: interop.Pointer | interop.Reference<any>, version: number): boolean;

declare function mongoc_client_set_read_concern(client: interop.Pointer | interop.Reference<any>, read_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_set_read_prefs(client: interop.Pointer | interop.Reference<any>, read_prefs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_set_stream_initiator(client: interop.Pointer | interop.Reference<any>, initiator: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: interop.Pointer | interop.Reference<_mongoc_host_list_t>, p3: interop.Pointer | interop.Reference<any>, p4: interop.Pointer | interop.Reference<bson_error_t>) => interop.Pointer | interop.Reference<_mongoc_stream_t>>, user_data: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_set_write_concern(client: interop.Pointer | interop.Reference<any>, write_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_client_start_session(client: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_watch(client: interop.Pointer | interop.Reference<any>, pipeline: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_client_write_command_with_opts(client: interop.Pointer | interop.Reference<any>, db_name: string, command: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_aggregate(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_query_flags_t, pipeline: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_command(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_query_flags_t, skip: number, limit: number, batch_size: number, command: interop.Pointer | interop.Reference<bson_t>, fields: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_command_simple(collection: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_command_with_opts(collection: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_copy(collection: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_count(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_query_flags_t, query: interop.Pointer | interop.Reference<bson_t>, skip: number, limit: number, read_prefs: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): number;

declare function mongoc_collection_count_documents(coll: interop.Pointer | interop.Reference<any>, filter: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): number;

declare function mongoc_collection_count_with_opts(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_query_flags_t, query: interop.Pointer | interop.Reference<bson_t>, skip: number, limit: number, opts: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): number;

declare function mongoc_collection_create_bulk_operation(collection: interop.Pointer | interop.Reference<any>, ordered: boolean, write_concern: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_create_bulk_operation_with_opts(collection: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_create_index(collection: interop.Pointer | interop.Reference<any>, keys: interop.Pointer | interop.Reference<bson_t>, opt: interop.Pointer | interop.Reference<mongoc_index_opt_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_create_index_with_opts(collection: interop.Pointer | interop.Reference<any>, keys: interop.Pointer | interop.Reference<bson_t>, opt: interop.Pointer | interop.Reference<mongoc_index_opt_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_delete(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_delete_flags_t, selector: interop.Pointer | interop.Reference<bson_t>, write_concern: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_delete_many(collection: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_delete_one(collection: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_destroy(collection: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_collection_drop(collection: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_drop_index(collection: interop.Pointer | interop.Reference<any>, index_name: string, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_drop_index_with_opts(collection: interop.Pointer | interop.Reference<any>, index_name: string, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_drop_with_opts(collection: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_ensure_index(collection: interop.Pointer | interop.Reference<any>, keys: interop.Pointer | interop.Reference<bson_t>, opt: interop.Pointer | interop.Reference<mongoc_index_opt_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_estimated_document_count(coll: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): number;

declare function mongoc_collection_find(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_query_flags_t, skip: number, limit: number, batch_size: number, query: interop.Pointer | interop.Reference<bson_t>, fields: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_find_and_modify(collection: interop.Pointer | interop.Reference<any>, query: interop.Pointer | interop.Reference<bson_t>, sort: interop.Pointer | interop.Reference<bson_t>, update: interop.Pointer | interop.Reference<bson_t>, fields: interop.Pointer | interop.Reference<bson_t>, _remove: boolean, upsert: boolean, _new: boolean, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_find_and_modify_with_opts(collection: interop.Pointer | interop.Reference<any>, query: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_find_indexes(collection: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_find_indexes_with_opts(collection: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_find_with_opts(collection: interop.Pointer | interop.Reference<any>, filter: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_get_last_error(collection: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_collection_get_name(collection: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_collection_get_read_concern(collection: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_get_read_prefs(collection: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_get_write_concern(collection: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_insert(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_insert_flags_t, document: interop.Pointer | interop.Reference<bson_t>, write_concern: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_insert_bulk(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_insert_flags_t, documents: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>, n_documents: number, write_concern: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_insert_many(collection: interop.Pointer | interop.Reference<any>, documents: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>, n_documents: number, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_insert_one(collection: interop.Pointer | interop.Reference<any>, document: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_keys_to_index_string(keys: interop.Pointer | interop.Reference<bson_t>): string;

declare function mongoc_collection_read_command_with_opts(collection: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_read_write_command_with_opts(collection: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_remove(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_remove_flags_t, selector: interop.Pointer | interop.Reference<bson_t>, write_concern: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_rename(collection: interop.Pointer | interop.Reference<any>, new_db: string, new_name: string, drop_target_before_rename: boolean, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_rename_with_opts(collection: interop.Pointer | interop.Reference<any>, new_db: string, new_name: string, drop_target_before_rename: boolean, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_replace_one(collection: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, replacement: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_save(collection: interop.Pointer | interop.Reference<any>, document: interop.Pointer | interop.Reference<bson_t>, write_concern: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_set_read_concern(collection: interop.Pointer | interop.Reference<any>, read_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_collection_set_read_prefs(collection: interop.Pointer | interop.Reference<any>, read_prefs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_collection_set_write_concern(collection: interop.Pointer | interop.Reference<any>, write_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_collection_stats(collection: interop.Pointer | interop.Reference<any>, options: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_update(collection: interop.Pointer | interop.Reference<any>, flags: mongoc_update_flags_t, selector: interop.Pointer | interop.Reference<bson_t>, update: interop.Pointer | interop.Reference<bson_t>, write_concern: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_update_many(collection: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, update: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_update_one(collection: interop.Pointer | interop.Reference<any>, selector: interop.Pointer | interop.Reference<bson_t>, update: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_validate(collection: interop.Pointer | interop.Reference<any>, options: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_collection_watch(coll: interop.Pointer | interop.Reference<any>, pipeline: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_collection_write_command_with_opts(collection: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_cursor_clone(cursor: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_cursor_current(cursor: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_cursor_destroy(cursor: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_cursor_error(cursor: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_cursor_error_document(cursor: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>, doc: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>): boolean;

declare function mongoc_cursor_get_batch_size(cursor: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_cursor_get_hint(cursor: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_cursor_get_host(cursor: interop.Pointer | interop.Reference<any>, host: interop.Pointer | interop.Reference<_mongoc_host_list_t>): void;

declare function mongoc_cursor_get_id(cursor: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_cursor_get_limit(cursor: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_cursor_get_max_await_time_ms(cursor: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_cursor_is_alive(cursor: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_cursor_more(cursor: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_cursor_new_from_command_reply(client: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, server_id: number): interop.Pointer | interop.Reference<any>;

declare function mongoc_cursor_new_from_command_reply_with_opts(client: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_cursor_next(cursor: interop.Pointer | interop.Reference<any>, bson: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<bson_t>>): boolean;

declare function mongoc_cursor_set_batch_size(cursor: interop.Pointer | interop.Reference<any>, batch_size: number): void;

declare function mongoc_cursor_set_hint(cursor: interop.Pointer | interop.Reference<any>, server_id: number): boolean;

declare function mongoc_cursor_set_limit(cursor: interop.Pointer | interop.Reference<any>, limit: number): boolean;

declare function mongoc_cursor_set_max_await_time_ms(cursor: interop.Pointer | interop.Reference<any>, max_await_time_ms: number): void;

declare function mongoc_database_add_user(database: interop.Pointer | interop.Reference<any>, username: string, password: string, roles: interop.Pointer | interop.Reference<bson_t>, custom_data: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_command(database: interop.Pointer | interop.Reference<any>, flags: mongoc_query_flags_t, skip: number, limit: number, batch_size: number, command: interop.Pointer | interop.Reference<bson_t>, fields: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_command_simple(database: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_command_with_opts(database: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_copy(database: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_create_collection(database: interop.Pointer | interop.Reference<any>, name: string, options: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_destroy(database: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_database_drop(database: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_drop_with_opts(database: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_find_collections(database: interop.Pointer | interop.Reference<any>, filter: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_find_collections_with_opts(database: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_get_collection(database: interop.Pointer | interop.Reference<any>, name: string): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_get_collection_names(database: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<string>;

declare function mongoc_database_get_collection_names_with_opts(database: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<string>;

declare function mongoc_database_get_name(database: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_database_get_read_concern(database: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_get_read_prefs(database: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_get_write_concern(database: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_has_collection(database: interop.Pointer | interop.Reference<any>, name: string, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_read_command_with_opts(database: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_read_write_command_with_opts(database: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, read_prefs: interop.Pointer | interop.Reference<any>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_remove_all_users(database: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_remove_user(database: interop.Pointer | interop.Reference<any>, username: string, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_database_set_read_concern(database: interop.Pointer | interop.Reference<any>, read_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_database_set_read_prefs(database: interop.Pointer | interop.Reference<any>, read_prefs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_database_set_write_concern(database: interop.Pointer | interop.Reference<any>, write_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_database_watch(db: interop.Pointer | interop.Reference<any>, pipeline: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_database_write_command_with_opts(database: interop.Pointer | interop.Reference<any>, command: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, reply: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare const enum mongoc_delete_flags_t {

	MONGOC_DELETE_NONE = 0,

	MONGOC_DELETE_SINGLE_REMOVE = 1
}

declare const enum mongoc_error_code_t {

	MONGOC_ERROR_STREAM_INVALID_TYPE = 1,

	MONGOC_ERROR_STREAM_INVALID_STATE = 2,

	MONGOC_ERROR_STREAM_NAME_RESOLUTION = 3,

	MONGOC_ERROR_STREAM_SOCKET = 4,

	MONGOC_ERROR_STREAM_CONNECT = 5,

	MONGOC_ERROR_STREAM_NOT_ESTABLISHED = 6,

	MONGOC_ERROR_CLIENT_NOT_READY = 7,

	MONGOC_ERROR_CLIENT_TOO_BIG = 8,

	MONGOC_ERROR_CLIENT_TOO_SMALL = 9,

	MONGOC_ERROR_CLIENT_GETNONCE = 10,

	MONGOC_ERROR_CLIENT_AUTHENTICATE = 11,

	MONGOC_ERROR_CLIENT_NO_ACCEPTABLE_PEER = 12,

	MONGOC_ERROR_CLIENT_IN_EXHAUST = 13,

	MONGOC_ERROR_PROTOCOL_INVALID_REPLY = 14,

	MONGOC_ERROR_PROTOCOL_BAD_WIRE_VERSION = 15,

	MONGOC_ERROR_CURSOR_INVALID_CURSOR = 16,

	MONGOC_ERROR_QUERY_FAILURE = 17,

	MONGOC_ERROR_BSON_INVALID = 18,

	MONGOC_ERROR_MATCHER_INVALID = 19,

	MONGOC_ERROR_NAMESPACE_INVALID = 20,

	MONGOC_ERROR_NAMESPACE_INVALID_FILTER_TYPE = 21,

	MONGOC_ERROR_COMMAND_INVALID_ARG = 22,

	MONGOC_ERROR_COLLECTION_INSERT_FAILED = 23,

	MONGOC_ERROR_COLLECTION_UPDATE_FAILED = 24,

	MONGOC_ERROR_COLLECTION_DELETE_FAILED = 25,

	MONGOC_ERROR_COLLECTION_DOES_NOT_EXIST = 26,

	MONGOC_ERROR_GRIDFS_INVALID_FILENAME = 27,

	MONGOC_ERROR_SCRAM_NOT_DONE = 28,

	MONGOC_ERROR_SCRAM_PROTOCOL_ERROR = 29,

	MONGOC_ERROR_QUERY_COMMAND_NOT_FOUND = 59,

	MONGOC_ERROR_QUERY_NOT_TAILABLE = 13051,

	MONGOC_ERROR_SERVER_SELECTION_BAD_WIRE_VERSION = 13052,

	MONGOC_ERROR_SERVER_SELECTION_FAILURE = 13053,

	MONGOC_ERROR_SERVER_SELECTION_INVALID_ID = 13054,

	MONGOC_ERROR_GRIDFS_CHUNK_MISSING = 13055,

	MONGOC_ERROR_GRIDFS_PROTOCOL_ERROR = 13056,

	MONGOC_ERROR_PROTOCOL_ERROR = 17,

	MONGOC_ERROR_WRITE_CONCERN_ERROR = 64,

	MONGOC_ERROR_DUPLICATE_KEY = 11000,

	MONGOC_ERROR_CHANGE_STREAM_NO_RESUME_TOKEN = 11001,

	MONGOC_ERROR_CLIENT_SESSION_FAILURE = 11002,

	MONGOC_ERROR_TRANSACTION_INVALID_STATE = 11003,

	MONGOC_ERROR_GRIDFS_CORRUPT = 11004
}

declare const enum mongoc_error_domain_t {

	MONGOC_ERROR_CLIENT = 1,

	MONGOC_ERROR_STREAM = 2,

	MONGOC_ERROR_PROTOCOL = 3,

	MONGOC_ERROR_CURSOR = 4,

	MONGOC_ERROR_QUERY = 5,

	MONGOC_ERROR_INSERT = 6,

	MONGOC_ERROR_SASL = 7,

	MONGOC_ERROR_BSON = 8,

	MONGOC_ERROR_MATCHER = 9,

	MONGOC_ERROR_NAMESPACE = 10,

	MONGOC_ERROR_COMMAND = 11,

	MONGOC_ERROR_COLLECTION = 12,

	MONGOC_ERROR_GRIDFS = 13,

	MONGOC_ERROR_SCRAM = 14,

	MONGOC_ERROR_SERVER_SELECTION = 15,

	MONGOC_ERROR_WRITE_CONCERN = 16,

	MONGOC_ERROR_SERVER = 17,

	MONGOC_ERROR_TRANSACTION = 18
}

declare function mongoc_error_has_label(reply: interop.Pointer | interop.Reference<bson_t>, label: string): boolean;

declare const enum mongoc_find_and_modify_flags_t {

	MONGOC_FIND_AND_MODIFY_NONE = 0,

	MONGOC_FIND_AND_MODIFY_REMOVE = 1,

	MONGOC_FIND_AND_MODIFY_UPSERT = 2,

	MONGOC_FIND_AND_MODIFY_RETURN_NEW = 4
}

declare function mongoc_find_and_modify_opts_append(opts: interop.Pointer | interop.Reference<any>, extra: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_find_and_modify_opts_destroy(opts: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_find_and_modify_opts_get_bypass_document_validation(opts: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_find_and_modify_opts_get_extra(opts: interop.Pointer | interop.Reference<any>, extra: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_find_and_modify_opts_get_fields(opts: interop.Pointer | interop.Reference<any>, fields: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_find_and_modify_opts_get_flags(opts: interop.Pointer | interop.Reference<any>): mongoc_find_and_modify_flags_t;

declare function mongoc_find_and_modify_opts_get_max_time_ms(opts: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_find_and_modify_opts_get_sort(opts: interop.Pointer | interop.Reference<any>, sort: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_find_and_modify_opts_get_update(opts: interop.Pointer | interop.Reference<any>, update: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_find_and_modify_opts_new(): interop.Pointer | interop.Reference<any>;

declare function mongoc_find_and_modify_opts_set_bypass_document_validation(opts: interop.Pointer | interop.Reference<any>, bypass: boolean): boolean;

declare function mongoc_find_and_modify_opts_set_fields(opts: interop.Pointer | interop.Reference<any>, fields: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_find_and_modify_opts_set_flags(opts: interop.Pointer | interop.Reference<any>, flags: mongoc_find_and_modify_flags_t): boolean;

declare function mongoc_find_and_modify_opts_set_max_time_ms(opts: interop.Pointer | interop.Reference<any>, max_time_ms: number): boolean;

declare function mongoc_find_and_modify_opts_set_sort(opts: interop.Pointer | interop.Reference<any>, sort: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_find_and_modify_opts_set_update(opts: interop.Pointer | interop.Reference<any>, update: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_get_major_version(): number;

declare function mongoc_get_micro_version(): number;

declare function mongoc_get_minor_version(): number;

declare function mongoc_get_version(): string;

declare function mongoc_gridfs_create_file(gridfs: interop.Pointer | interop.Reference<any>, opt: interop.Pointer | interop.Reference<_mongoc_gridfs_file_opt_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_create_file_from_stream(gridfs: interop.Pointer | interop.Reference<any>, stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, opt: interop.Pointer | interop.Reference<_mongoc_gridfs_file_opt_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_destroy(gridfs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_gridfs_drop(gridfs: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_gridfs_file_destroy(file: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_gridfs_file_error(file: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_gridfs_file_get_aliases(file: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_gridfs_file_get_chunk_size(file: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_gridfs_file_get_content_type(file: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_gridfs_file_get_filename(file: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_gridfs_file_get_length(file: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_gridfs_file_get_md5(file: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_gridfs_file_get_metadata(file: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_gridfs_file_get_upload_date(file: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_gridfs_file_list_destroy(list: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_gridfs_file_list_error(list: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_gridfs_file_list_next(list: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_file_readv(file: interop.Pointer | interop.Reference<any>, iov: interop.Pointer | interop.Reference<iovec>, iovcnt: number, min_bytes: number, timeout_msec: number): number;

declare function mongoc_gridfs_file_remove(file: interop.Pointer | interop.Reference<any>, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_gridfs_file_save(file: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_gridfs_file_seek(file: interop.Pointer | interop.Reference<any>, delta: number, whence: number): number;

declare function mongoc_gridfs_file_set_aliases(file: interop.Pointer | interop.Reference<any>, bson: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_gridfs_file_set_content_type(file: interop.Pointer | interop.Reference<any>, str: string): void;

declare function mongoc_gridfs_file_set_filename(file: interop.Pointer | interop.Reference<any>, str: string): void;

declare function mongoc_gridfs_file_set_md5(file: interop.Pointer | interop.Reference<any>, str: string): void;

declare function mongoc_gridfs_file_set_metadata(file: interop.Pointer | interop.Reference<any>, bson: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_gridfs_file_tell(file: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_gridfs_file_writev(file: interop.Pointer | interop.Reference<any>, iov: interop.Pointer | interop.Reference<iovec>, iovcnt: number, timeout_msec: number): number;

declare function mongoc_gridfs_find(gridfs: interop.Pointer | interop.Reference<any>, query: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_find_one(gridfs: interop.Pointer | interop.Reference<any>, query: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_find_one_by_filename(gridfs: interop.Pointer | interop.Reference<any>, filename: string, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_find_one_with_opts(gridfs: interop.Pointer | interop.Reference<any>, filter: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_find_with_opts(gridfs: interop.Pointer | interop.Reference<any>, filter: interop.Pointer | interop.Reference<bson_t>, opts: interop.Pointer | interop.Reference<bson_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_get_chunks(gridfs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_get_files(gridfs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_gridfs_remove_by_filename(gridfs: interop.Pointer | interop.Reference<any>, filename: string, error: interop.Pointer | interop.Reference<bson_error_t>): boolean;

declare function mongoc_handshake_data_append(driver_name: string, driver_version: string, platform: string): boolean;

declare function mongoc_index_opt_geo_get_default(): interop.Pointer | interop.Reference<mongoc_index_opt_geo_t>;

declare function mongoc_index_opt_geo_init(opt: interop.Pointer | interop.Reference<mongoc_index_opt_geo_t>): void;

interface mongoc_index_opt_geo_t {
	twod_sphere_version: number;
	twod_bits_precision: number;
	twod_location_min: number;
	twod_location_max: number;
	haystack_bucket_size: number;
	padding: interop.Reference<string>;
}
declare var mongoc_index_opt_geo_t: interop.StructType<mongoc_index_opt_geo_t>;

declare function mongoc_index_opt_get_default(): interop.Pointer | interop.Reference<mongoc_index_opt_t>;

declare function mongoc_index_opt_init(opt: interop.Pointer | interop.Reference<mongoc_index_opt_t>): void;

interface mongoc_index_opt_storage_t {
	type: number;
}
declare var mongoc_index_opt_storage_t: interop.StructType<mongoc_index_opt_storage_t>;

interface mongoc_index_opt_t {
	is_initialized: boolean;
	background: boolean;
	unique: boolean;
	name: string;
	drop_dups: boolean;
	sparse: boolean;
	expire_after_seconds: number;
	v: number;
	weights: interop.Pointer | interop.Reference<bson_t>;
	default_language: string;
	language_override: string;
	geo_options: interop.Pointer | interop.Reference<mongoc_index_opt_geo_t>;
	storage_options: interop.Pointer | interop.Reference<mongoc_index_opt_storage_t>;
	partial_filter_expression: interop.Pointer | interop.Reference<bson_t>;
	collation: interop.Pointer | interop.Reference<bson_t>;
	padding: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var mongoc_index_opt_t: interop.StructType<mongoc_index_opt_t>;

declare function mongoc_index_opt_wt_get_default(): interop.Pointer | interop.Reference<mongoc_index_opt_wt_t>;

declare function mongoc_index_opt_wt_init(opt: interop.Pointer | interop.Reference<mongoc_index_opt_wt_t>): void;

interface mongoc_index_opt_wt_t {
	base: mongoc_index_opt_storage_t;
	config_str: string;
	padding: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var mongoc_index_opt_wt_t: interop.StructType<mongoc_index_opt_wt_t>;

declare const enum mongoc_index_storage_opt_type_t {

	MONGOC_INDEX_STORAGE_OPT_MMAPV1 = 0,

	MONGOC_INDEX_STORAGE_OPT_WIREDTIGER = 1
}

declare function mongoc_init(): void;

declare const enum mongoc_insert_flags_t {

	MONGOC_INSERT_NONE = 0,

	MONGOC_INSERT_CONTINUE_ON_ERROR = 1
}

declare function mongoc_log_default_handler(log_level: mongoc_log_level_t, log_domain: string, message: string, user_data: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_log_level_str(log_level: mongoc_log_level_t): string;

declare const enum mongoc_log_level_t {

	MONGOC_LOG_LEVEL_ERROR = 0,

	MONGOC_LOG_LEVEL_CRITICAL = 1,

	MONGOC_LOG_LEVEL_WARNING = 2,

	MONGOC_LOG_LEVEL_MESSAGE = 3,

	MONGOC_LOG_LEVEL_INFO = 4,

	MONGOC_LOG_LEVEL_DEBUG = 5,

	MONGOC_LOG_LEVEL_TRACE = 6
}

declare function mongoc_log_set_handler(log_func: interop.FunctionReference<(p1: mongoc_log_level_t, p2: string, p3: string, p4: interop.Pointer | interop.Reference<any>) => void>, user_data: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_log_trace_disable(): void;

declare function mongoc_log_trace_enable(): void;

declare function mongoc_matcher_destroy(matcher: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_matcher_match(matcher: interop.Pointer | interop.Reference<any>, document: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_matcher_new(query: interop.Pointer | interop.Reference<bson_t>, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare const enum mongoc_opcode_t {

	MONGOC_OPCODE_REPLY = 1,

	MONGOC_OPCODE_UPDATE = 2001,

	MONGOC_OPCODE_INSERT = 2002,

	MONGOC_OPCODE_QUERY = 2004,

	MONGOC_OPCODE_GET_MORE = 2005,

	MONGOC_OPCODE_DELETE = 2006,

	MONGOC_OPCODE_KILL_CURSORS = 2007,

	MONGOC_OPCODE_COMPRESSED = 2012,

	MONGOC_OPCODE_MSG = 2013
}

declare const enum mongoc_query_flags_t {

	MONGOC_QUERY_NONE = 0,

	MONGOC_QUERY_TAILABLE_CURSOR = 2,

	MONGOC_QUERY_SLAVE_OK = 4,

	MONGOC_QUERY_OPLOG_REPLAY = 8,

	MONGOC_QUERY_NO_CURSOR_TIMEOUT = 16,

	MONGOC_QUERY_AWAIT_DATA = 32,

	MONGOC_QUERY_EXHAUST = 64,

	MONGOC_QUERY_PARTIAL = 128
}

declare function mongoc_read_concern_append(read_concern: interop.Pointer | interop.Reference<any>, doc: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_read_concern_copy(read_concern: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_read_concern_destroy(read_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_read_concern_get_level(read_concern: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_read_concern_is_default(read_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_read_concern_new(): interop.Pointer | interop.Reference<any>;

declare function mongoc_read_concern_set_level(read_concern: interop.Pointer | interop.Reference<any>, level: string): boolean;

declare const enum mongoc_read_mode_t {

	MONGOC_READ_PRIMARY = 1,

	MONGOC_READ_SECONDARY = 2,

	MONGOC_READ_PRIMARY_PREFERRED = 5,

	MONGOC_READ_SECONDARY_PREFERRED = 6,

	MONGOC_READ_NEAREST = 10
}

declare function mongoc_read_prefs_add_tag(read_prefs: interop.Pointer | interop.Reference<any>, tag: interop.Pointer | interop.Reference<bson_t>): void;

declare function mongoc_read_prefs_copy(read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_read_prefs_destroy(read_prefs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_read_prefs_get_max_staleness_seconds(read_prefs: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_read_prefs_get_mode(read_prefs: interop.Pointer | interop.Reference<any>): mongoc_read_mode_t;

declare function mongoc_read_prefs_get_tags(read_prefs: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_read_prefs_is_valid(read_prefs: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_read_prefs_new(read_mode: mongoc_read_mode_t): interop.Pointer | interop.Reference<any>;

declare function mongoc_read_prefs_set_max_staleness_seconds(read_prefs: interop.Pointer | interop.Reference<any>, max_staleness_seconds: number): void;

declare function mongoc_read_prefs_set_mode(read_prefs: interop.Pointer | interop.Reference<any>, mode: mongoc_read_mode_t): void;

declare function mongoc_read_prefs_set_tags(read_prefs: interop.Pointer | interop.Reference<any>, tags: interop.Pointer | interop.Reference<bson_t>): void;

declare const enum mongoc_remove_flags_t {

	MONGOC_REMOVE_NONE = 0,

	MONGOC_REMOVE_SINGLE_REMOVE = 1
}

declare const enum mongoc_reply_flags_t {

	MONGOC_REPLY_NONE = 0,

	MONGOC_REPLY_CURSOR_NOT_FOUND = 1,

	MONGOC_REPLY_QUERY_FAILURE = 2,

	MONGOC_REPLY_SHARD_CONFIG_STALE = 4,

	MONGOC_REPLY_AWAIT_CAPABLE = 8
}

declare function mongoc_server_description_compressor_id(description: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_server_description_destroy(description: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_server_description_host(description: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_server_description_id(description: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_server_description_ismaster(description: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_server_description_new_copy(description: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_server_description_round_trip_time(description: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_server_description_type(description: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_server_descriptions_destroy_all(sds: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>, n: number): void;

declare function mongoc_session_opts_clone(opts: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_session_opts_destroy(opts: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_session_opts_get_causal_consistency(opts: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_session_opts_get_default_transaction_opts(opts: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_session_opts_new(): interop.Pointer | interop.Reference<any>;

declare function mongoc_session_opts_set_causal_consistency(opts: interop.Pointer | interop.Reference<any>, causal_consistency: boolean): void;

declare function mongoc_session_opts_set_default_transaction_opts(opts: interop.Pointer | interop.Reference<any>, txn_opts: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_socket_accept(sock: interop.Pointer | interop.Reference<any>, expire_at: number): interop.Pointer | interop.Reference<any>;

declare function mongoc_socket_bind(sock: interop.Pointer | interop.Reference<any>, addr: interop.Pointer | interop.Reference<sockaddr>, addrlen: number): number;

declare function mongoc_socket_check_closed(sock: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_socket_close(socket: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_socket_connect(sock: interop.Pointer | interop.Reference<any>, addr: interop.Pointer | interop.Reference<sockaddr>, addrlen: number, expire_at: number): number;

declare function mongoc_socket_destroy(sock: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_socket_errno(sock: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_socket_getnameinfo(sock: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_socket_getsockname(sock: interop.Pointer | interop.Reference<any>, addr: interop.Pointer | interop.Reference<sockaddr>, addrlen: interop.Pointer | interop.Reference<number>): number;

declare function mongoc_socket_inet_ntop(rp: interop.Pointer | interop.Reference<addrinfo>, buf: string, buflen: number): void;

declare function mongoc_socket_listen(sock: interop.Pointer | interop.Reference<any>, backlog: number): number;

declare function mongoc_socket_new(domain: number, type: number, protocol: number): interop.Pointer | interop.Reference<any>;

declare function mongoc_socket_poll(sds: interop.Pointer | interop.Reference<mongoc_socket_poll_t>, nsds: number, timeout: number): number;

interface mongoc_socket_poll_t {
	socket: interop.Pointer | interop.Reference<any>;
	events: number;
	revents: number;
}
declare var mongoc_socket_poll_t: interop.StructType<mongoc_socket_poll_t>;

declare function mongoc_socket_recv(sock: interop.Pointer | interop.Reference<any>, buf: interop.Pointer | interop.Reference<any>, buflen: number, flags: number, expire_at: number): number;

declare function mongoc_socket_send(sock: interop.Pointer | interop.Reference<any>, buf: interop.Pointer | interop.Reference<any>, buflen: number, expire_at: number): number;

declare function mongoc_socket_sendv(sock: interop.Pointer | interop.Reference<any>, iov: interop.Pointer | interop.Reference<iovec>, iovcnt: number, expire_at: number): number;

declare function mongoc_socket_setsockopt(sock: interop.Pointer | interop.Reference<any>, level: number, optname: number, optval: interop.Pointer | interop.Reference<any>, optlen: number): number;

declare function mongoc_stream_buffered_new(base_stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, buffer_size: number): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_check_closed(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): boolean;

declare function mongoc_stream_close(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): number;

declare function mongoc_stream_destroy(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): void;

declare function mongoc_stream_failed(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): void;

declare function mongoc_stream_file_get_fd(stream: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_stream_file_new(fd: number): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_file_new_for_path(path: string, flags: number, mode: number): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_flush(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): number;

declare function mongoc_stream_get_base_stream(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_get_tls_stream(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_gridfs_new(file: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_poll(streams: interop.Pointer | interop.Reference<mongoc_stream_poll_t>, nstreams: number, timeout: number): number;

interface mongoc_stream_poll_t {
	stream: interop.Pointer | interop.Reference<_mongoc_stream_t>;
	events: number;
	revents: number;
}
declare var mongoc_stream_poll_t: interop.StructType<mongoc_stream_poll_t>;

declare function mongoc_stream_read(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, buf: interop.Pointer | interop.Reference<any>, count: number, min_bytes: number, timeout_msec: number): number;

declare function mongoc_stream_readv(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, iov: interop.Pointer | interop.Reference<iovec>, iovcnt: number, min_bytes: number, timeout_msec: number): number;

declare function mongoc_stream_setsockopt(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, level: number, optname: number, optval: interop.Pointer | interop.Reference<any>, optlen: number): number;

declare function mongoc_stream_socket_get_socket(stream: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_stream_socket_new(socket: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_stream_t>;

declare function mongoc_stream_timed_out(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>): boolean;

declare function mongoc_stream_write(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, buf: interop.Pointer | interop.Reference<any>, count: number, timeout_msec: number): number;

declare function mongoc_stream_writev(stream: interop.Pointer | interop.Reference<_mongoc_stream_t>, iov: interop.Pointer | interop.Reference<iovec>, iovcnt: number, timeout_msec: number): number;

declare function mongoc_topology_description_get_servers(td: interop.Pointer | interop.Reference<any>, n: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>;

declare function mongoc_topology_description_has_readable_server(td: interop.Pointer | interop.Reference<any>, prefs: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_topology_description_has_writable_server(td: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_topology_description_type(td: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_transaction_opts_clone(opts: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_transaction_opts_destroy(opts: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_transaction_opts_get_read_concern(opts: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_transaction_opts_get_read_prefs(opts: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_transaction_opts_get_write_concern(opts: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_transaction_opts_new(): interop.Pointer | interop.Reference<any>;

declare function mongoc_transaction_opts_set_read_concern(opts: interop.Pointer | interop.Reference<any>, read_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_transaction_opts_set_read_prefs(opts: interop.Pointer | interop.Reference<any>, read_prefs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_transaction_opts_set_write_concern(opts: interop.Pointer | interop.Reference<any>, write_concern: interop.Pointer | interop.Reference<any>): void;

declare const enum mongoc_update_flags_t {

	MONGOC_UPDATE_NONE = 0,

	MONGOC_UPDATE_UPSERT = 1,

	MONGOC_UPDATE_MULTI_UPDATE = 2
}

declare function mongoc_uri_copy(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_destroy(uri: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_uri_get_appname(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_auth_mechanism(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_auth_source(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_compressors(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_uri_get_credentials(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_uri_get_database(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_hosts(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<_mongoc_host_list_t>;

declare function mongoc_uri_get_mechanism_properties(uri: interop.Pointer | interop.Reference<any>, properties: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_uri_get_option_as_bool(uri: interop.Pointer | interop.Reference<any>, option: string, fallback: boolean): boolean;

declare function mongoc_uri_get_option_as_int32(uri: interop.Pointer | interop.Reference<any>, option: string, fallback: number): number;

declare function mongoc_uri_get_option_as_utf8(uri: interop.Pointer | interop.Reference<any>, option: string, fallback: string): string;

declare function mongoc_uri_get_options(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_uri_get_password(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_read_concern(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_get_read_prefs(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<bson_t>;

declare function mongoc_uri_get_read_prefs_t(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_get_replica_set(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_service(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_ssl(uri: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_uri_get_string(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_username(uri: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_uri_get_write_concern(uri: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_new(uri_string: string): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_new_for_host_port(hostname: string, port: number): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_new_with_error(uri_string: string, error: interop.Pointer | interop.Reference<bson_error_t>): interop.Pointer | interop.Reference<any>;

declare function mongoc_uri_option_is_bool(key: string): boolean;

declare function mongoc_uri_option_is_int32(key: string): boolean;

declare function mongoc_uri_option_is_utf8(key: string): boolean;

declare function mongoc_uri_set_appname(uri: interop.Pointer | interop.Reference<any>, value: string): boolean;

declare function mongoc_uri_set_auth_mechanism(uri: interop.Pointer | interop.Reference<any>, value: string): boolean;

declare function mongoc_uri_set_auth_source(uri: interop.Pointer | interop.Reference<any>, value: string): boolean;

declare function mongoc_uri_set_compressors(uri: interop.Pointer | interop.Reference<any>, value: string): boolean;

declare function mongoc_uri_set_database(uri: interop.Pointer | interop.Reference<any>, database: string): boolean;

declare function mongoc_uri_set_mechanism_properties(uri: interop.Pointer | interop.Reference<any>, properties: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_uri_set_option_as_bool(uri: interop.Pointer | interop.Reference<any>, option: string, value: boolean): boolean;

declare function mongoc_uri_set_option_as_int32(uri: interop.Pointer | interop.Reference<any>, option: string, value: number): boolean;

declare function mongoc_uri_set_option_as_utf8(uri: interop.Pointer | interop.Reference<any>, option: string, value: string): boolean;

declare function mongoc_uri_set_password(uri: interop.Pointer | interop.Reference<any>, password: string): boolean;

declare function mongoc_uri_set_read_concern(uri: interop.Pointer | interop.Reference<any>, rc: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_uri_set_read_prefs_t(uri: interop.Pointer | interop.Reference<any>, prefs: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_uri_set_username(uri: interop.Pointer | interop.Reference<any>, username: string): boolean;

declare function mongoc_uri_set_write_concern(uri: interop.Pointer | interop.Reference<any>, wc: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_uri_unescape(escaped_string: string): string;

declare function mongoc_write_concern_append(write_concern: interop.Pointer | interop.Reference<any>, doc: interop.Pointer | interop.Reference<bson_t>): boolean;

declare function mongoc_write_concern_copy(write_concern: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function mongoc_write_concern_destroy(write_concern: interop.Pointer | interop.Reference<any>): void;

declare function mongoc_write_concern_get_fsync(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_get_journal(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_get_w(write_concern: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_write_concern_get_wmajority(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_get_wtag(write_concern: interop.Pointer | interop.Reference<any>): string;

declare function mongoc_write_concern_get_wtimeout(write_concern: interop.Pointer | interop.Reference<any>): number;

declare function mongoc_write_concern_is_acknowledged(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_is_default(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_is_valid(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_journal_is_set(write_concern: interop.Pointer | interop.Reference<any>): boolean;

declare function mongoc_write_concern_new(): interop.Pointer | interop.Reference<any>;

declare function mongoc_write_concern_set_fsync(write_concern: interop.Pointer | interop.Reference<any>, fsync_: boolean): void;

declare function mongoc_write_concern_set_journal(write_concern: interop.Pointer | interop.Reference<any>, journal: boolean): void;

declare function mongoc_write_concern_set_w(write_concern: interop.Pointer | interop.Reference<any>, w: number): void;

declare function mongoc_write_concern_set_wmajority(write_concern: interop.Pointer | interop.Reference<any>, wtimeout_msec: number): void;

declare function mongoc_write_concern_set_wtag(write_concern: interop.Pointer | interop.Reference<any>, tag: string): void;

declare function mongoc_write_concern_set_wtimeout(write_concern: interop.Pointer | interop.Reference<any>, wtimeout_msec: number): void;
