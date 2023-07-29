/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate.password
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../utils/NestiaSimulator";
import type { ISeller } from "./../../../../structures/ISeller";

/**
 * Change password.
 * 
 * @param input Old and new passwords
 * @return Empty object
 * 
 * @controller SellerAuthenticateController.change()
 * @path PATCH /sellers/authenticate/password/change
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function change(
    connection: IConnection,
    input: change.Input,
): Promise<void> {
    return !!connection.simulate
        ? change.simulate(
              connection,
              input,
          )
        : Fetcher.fetch(
              connection,
              change.ENCRYPTED,
              change.METHOD,
              change.path(),
              input,
          );
}
export namespace change {
    export type Input = Primitive<ISeller.IChangePassword>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/sellers/authenticate/password/change";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: false,
    };

    export const path = (): string => {
        return `/sellers/authenticate/password/change`;
    }
    export const simulate = async (
        connection: IConnection,
        input: change.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path()
        });
        assert.body(() => typia.assert(input));
    }
}