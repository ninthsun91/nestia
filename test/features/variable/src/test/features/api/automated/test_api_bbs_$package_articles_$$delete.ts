import type { Primitive } from "@nestia/fetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import api from "../../../../api";

export const test_api_bbs_$package_articles_$$delete = async (
    connection: api.IConnection
): Promise<void> => {
    await api.functional.bbs.$package.articles.$$delete(
        connection,
        typia.random<Primitive<string>>(),
        typia.random<Primitive<string & Format<"uuid">>>(),
    );
};